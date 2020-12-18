import model from '../models';

const { Apps } = model;

export const createApp = async (req, res) => {
  try {
    const existingApp = await Apps.findOne({
      where: { name: req.body.name },
    });
    if (existingApp) {
      return res.status(400).json({
        status: 400,
        message: 'The App already exists in the system.',
      });
    }
    const app = await Apps.create(req.body);
    return res.status(200).json({
      status: 200,
      message: 'App created successfully.',
      App: app,
    });
  } catch (error) {
    return res.status(409).json({
      status: 409,
      message: error.message,
    });
  }
};

export const fetchApps = async (req, res) => {
  try {
    const apps = await Apps.findAll({
      where: {
        status: true
      }
    });

    if (apps.length < 1) {
      return res.status(403).json({
        status: 403,
        message: 'There are no apps registered in the system',
      });
    }

    return res.status(200).json({
      status: 200,
      message: 'Apps retrieved successfully',
      Apps: apps,
    });
  } catch (error) {
    return res.status(409).json({
      status: 409,
      message: error.message,
    });
  }
};

export const updateApps = async (req, res) => {
  try {
    const { id } = req.params;
    const existingApp = await Apps.findOne({
      where: { id },
    });

    if (!existingApp) {
      return res.status(404).json({
        status: 404,
        message: 'The App does not exist in the system',
      });
    }
    const {
      name, senderEmail, logo,
    } = req.body;

    const updateApp = await Apps.update({
      name, senderEmail, logo,
    },
    {
      where: { id: req.params.id }
    });

    if (updateApp) {
      const updatedApp = await Apps.findOne({ where: { id: req.params.id } });
      return res.status(200).json({
        status: 200,
        message: 'App updated successfully',
        App: updatedApp
      });
    }
    return res.status(400).json({
      status: 400,
      message: 'App not updated.'
    });
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteApp = async (req, res) => {
  try {
    const { id } = req.params;
    const existingApp = await Apps.findOne({
      where: { id },
    });
    if (!existingApp) {
      return res.status(403).json({
        status: 403,
        message: 'App does not exist in the system'
      });
    }
    const deleteById = await Apps.update({ status: false },
      {
        where: { id },
      });

    if (deleteById) {
      return res.status(200).json({
        status: 200,
        message: 'App deleted successfully.'
      });
    }
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

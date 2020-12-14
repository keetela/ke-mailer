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
  const apps = await Apps.findAll();

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
};

// export default (createApp, fetchApps);/

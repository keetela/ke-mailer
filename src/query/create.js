import db from '../models';

/**
 * @param {object} model inputs data to be saved in db
 * @param {object} data inputs data to be saved in db
 * @returns {object} Object representing the response returned
 */
export default async (model, data) => {
  try {
    await db[model].create(data, {
      logging: false,
      raw: true
    });
    return true;
  } catch (err) {
    return err;
  }
};

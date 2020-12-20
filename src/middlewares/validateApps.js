import Error from '../helpers/errorHandler';
import validateApp from '../helpers/validateApp';

const Apps = (req, res, next) => {
  const result = validateApp(req.body);
  if (result.error) {
    return Error.joiErrorHandler(res, result);
  }
  next();
};

export default Apps;

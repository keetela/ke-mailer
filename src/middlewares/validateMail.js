import Error from '../helpers/errorHandler';
import validateMail from '../helpers/validateMail';
/**
 * @param { object } req the request
 * @param { object } res the respond
 * @param { function } next
 * @return { return } return
 */
export default function mail(req, res, next) {
  const result = validateMail(req.body);
  if (result.error) {
    return Error.joiErrorHandler(res, result);
  }
  next();
}

import 'dotenv/config';
import Mailer from '../mailer';
import status from '../config/status';

/**
 * A class to handle parent's kids
 */
export default class MailerController {
  /**
   * @param  {object} req contains mail information
   * @param  {object} res contains server response
   * @return {object} return an object containing mail information
   */
  static async send(req, res) {
    const response = await Mailer(req.body);
    return response === true
      ? res.status(status.CREATED).json({
          status: status.CREATED,
          sent: true,
          message: 'Email has been send'
        })
      : res.status(status.BAD_REQUEST).json({
          status: status.BAD_REQUEST,
          sent: false,
          message: "Something wrong happened, email notification wasn't send"
        });
  }
}

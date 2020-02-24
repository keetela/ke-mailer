import 'dotenv/config';
import Mailer from '../mailer';
import status from '../config/status';
import query from '../query';

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
    if (response === true) {
      const content = {
        receiver: req.body.receiver,
        sender: req.body.sender,
        receiver_name: req.body.names,
        messages: req.body.message,
        subject: req.body.subject,
        service_id: req.body.service_id,
        text: req.body.text
      };
      await query.create('Mail', content);
      return res.status(status.CREATED).json({
        status: status.CREATED,
        sent: true,
        message: 'Email has been send'
      });
    }
    return res.status(status.BAD_REQUEST).json({
      status: status.BAD_REQUEST,
      sent: false,
      message: "Something wrong happened, email notification wasn't send"
    });
  }
}

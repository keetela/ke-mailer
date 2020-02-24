import dotenv from 'dotenv';
import mailer from '@sendgrid/mail';

dotenv.config();

export default async (data) => {
  const { SENDGRID_API_KEY } = process.env;

  mailer.setApiKey(SENDGRID_API_KEY);

  const emailData = {
    to: data.receiver,
    subject: data.subject,
    name: data.names,
    from: {
      email: data.sender,
      name: data.service_name
    },
    text: data.text || '',
    html: `<div style="width:100%;padding:30px 0;background:#f7f7f7;font-family:'Open Sans', sans-serif;font-weight:300">
    <!-- BODY -->
    <div style="max-width:700px;background:#ffffff;border:1px solid #e0e0e0;border-radius:4px;width:96%;margin:15px auto;font-size:16px;display:block;padding:0;">
       <div style="padding:25px">
          Dear, <b>${data.names}</b>, <br/><br/>
          ${data.message} 
          <br>
          <br>
          Best regards,<br>
       </div>
    </div>
    <!-- BODY, END -->
 </div>`
  };

  try {
    await mailer.send(emailData);
    return true;
  } catch (error) {
    return error;
  }
};

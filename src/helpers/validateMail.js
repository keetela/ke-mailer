import Joi from '@hapi/joi';

export default (input) => {
  const schema = Joi.object().keys({
    receiver: Joi.string()
      .min(8)
      .max(45)
      .email()
      .required(),
    sender: Joi.string()
      .min(8)
      .max(45)
      .email()
      .required(),
    subject: Joi.string()
      .min(3)
      .max(30)
      .required(),
    message: Joi.string()
      .min(10)
      .max(15000)
      .required(),
    names: Joi.string()
      .min(2)
      .max(60)
      .required(),
    service_name: Joi.string()
      .min(2)
      .max(45)
      .required(),
    service_id: Joi.string()
      // .regex(/^[0-9]{8}$/)
      .required(),
    text: Joi.string()
      .min(2)
      .max(60)
      .optional()
  });
  return Joi.validate(input, schema, { abortEarly: false });
};

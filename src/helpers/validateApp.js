import Joi from '@hapi/joi';

export default (input) => {
  const schema = Joi.object().keys({
    senderEmail: Joi.string()
      .min(8)
      .max(45)
      .email()
      .required(),
    status: Joi.string()
      .min(4)
      .max(5)
      .required(),
    name: Joi.string()
      .min(2)
      .max(50)
      .required(),
    logo: Joi.string()
      .min(5)
      .max(50)
      .required(),
  });
  return Joi.validate(input, schema);
};

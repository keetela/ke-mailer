import { Router } from 'express';
import MailerController from '../../controllers/MailerController';
import asyncHandler from '../../middlewares/asyncHandler';
// import { validate } from '../../middlewares';

const articles = Router();

// create article
articles.post(
  '/',
  // validate.mail,
  asyncHandler(MailerController.send)
);

export default articles;

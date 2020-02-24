import { Router } from 'express';
import MailerController from '../../controllers/MailerController';
import asyncHandler from '../../middlewares/asyncHandler';
import validateMail from '../../middlewares/validateMail';

const mailer = Router();

mailer.post('/', validateMail, asyncHandler(MailerController.send));

export default mailer;

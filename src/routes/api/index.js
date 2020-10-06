import express from 'express';
import mailer from './mailer';

const router = express.Router();

router.use('/mail', mailer);

export default router;

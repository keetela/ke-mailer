import express from 'express';
import mailer from './mailer';

const router = express.Router();

router.use('/mailer', mailer);

export default router;

import express from 'express';
import mailer from './mailer';
import Apps from './apps';

const router = express.Router();

router.use('/', Apps);
router.use('/create', Apps);
router.use('/mail', mailer);


export default router;

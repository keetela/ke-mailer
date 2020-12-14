import { Router } from 'express';
import { createApp, fetchApps } from '../../controllers/AppsController';
import asyncHandler from '../../middlewares/asyncHandler';
import validateApp from '../../middlewares/validateApps';

const Apps = Router();

Apps.get('/apps', validateApp, asyncHandler(fetchApps));
Apps.post('/', validateApp, asyncHandler(createApp));

export default Apps;

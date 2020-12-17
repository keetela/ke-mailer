import { Router } from 'express';
import {
  createApp, fetchApps, updateApps, deleteApp
} from '../../controllers/AppsController';
import asyncHandler from '../../middlewares/asyncHandler';
import validateApp from '../../middlewares/validateApps';

const Apps = Router();

Apps.get('/', asyncHandler(fetchApps));
Apps.post('/', validateApp, asyncHandler(createApp));
Apps.patch('/:appKey', validateApp, asyncHandler(updateApps));
Apps.delete('/', asyncHandler(deleteApp));

export default Apps;

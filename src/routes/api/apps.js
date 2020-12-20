import { Router } from 'express';
import {
  createApp, fetchApps, updateApps, deleteApp, generateKey
} from '../../controllers/AppsController';
import asyncHandler from '../../middlewares/asyncHandler';
import validateApp from '../../middlewares/validateApps';

const Apps = Router();

Apps.get('/', asyncHandler(fetchApps));
Apps.post('/', validateApp, asyncHandler(createApp));
Apps.patch('/:id', asyncHandler(updateApps));
Apps.delete('/:id', asyncHandler(deleteApp));
Apps.patch('/generate/:id', validateApp, asyncHandler(generateKey));

export default Apps;

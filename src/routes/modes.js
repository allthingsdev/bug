import express from 'express'
import { testEnvironmentVariable } from '../settings.js';
import * as controllers from '../controllers/modesController';
const modesRouter = express.Router();

modesRouter.get('/', controllers.modesHome);

export default modesRouter;
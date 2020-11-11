import express from 'express'
import { uomHome } from '../controllers/index.js';
import { testEnvironmentVariable } from '../settings.js';

const uomRouter = express.Router();

uomRouter.get('/', uomHome);

export default uomRouter;
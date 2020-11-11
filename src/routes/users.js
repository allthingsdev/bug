import express from 'express'
import { uomHome } from '../controllers/index.js';

const usersRouter = express.Router();

usersRouter.get('/', uomHome);

export default usersRouter;
import express from 'express';
import { itemsHome } from '../controllers';

const itemsRouter = express.Router();

itemsRouter.get('/', itemsHome);

export default itemsRouter;
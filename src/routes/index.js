import express from 'express';
import * as controllers from '../controllers';
import categoriesRouter from './categories';
import itemsRouter from './items';
import modesRouter from './modes';
import transactionsRouter from './transactions';
import uomRouter from './uom';
import usersRouter from './users';

const appRouter = express.Router();

appRouter.get('/', controllers.appHome);
appRouter.get('/items', itemsRouter);
appRouter.get('/transactions', transactionsRouter);
appRouter.get('/uom', uomRouter);
appRouter.get('/users', usersRouter);
appRouter.get('/modes', modesRouter);
appRouter.get('/categories', categoriesRouter);

export default appRouter;
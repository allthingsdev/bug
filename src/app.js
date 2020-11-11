import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import indexRouter from './routes/index';
import transactionsRouter from './routes/transactions.js';
import itemsRouter from './routes/items.js';
import categoriesRouter from './routes/categories.js';
import uomRouter from './routes/uom.js';
import modesRouter from './routes/modes.js';
import usersRouter from './routes/users.js';

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/transactions', transactionsRouter);
app.use('/items', itemsRouter);
app.use('/categories', categoriesRouter);
app.use('/uom', uomRouter);
app.use('/modes', modesRouter);
app.use('/users', usersRouter);

export default app;
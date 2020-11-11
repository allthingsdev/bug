import express from 'express'
import * as controllers from '../controllers/transController';

const transactionsRouter = express.Router();

//get all transactions
transactionsRouter.get('/', controllers.transHome );

//get all transactions
transactionsRouter.get('/view', controllers.viewTransaction );

// get one transaction
transactionsRouter.get('/view/:id', controllers.viewTransaction );

// get one transaction
transactionsRouter.get('/edit/:id', controllers.transHome );

// add a transaction
transactionsRouter.post('/add', controllers.addTransaction);

// delete a transaction
transactionsRouter.delete('/delete/:id', controllers.deleteTransaction)

export default transactionsRouter;
import express from 'express'

const transactionsRouter = express.Router();

transactionsRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: 'The Transactions Module' });
});

export default transactionsRouter;
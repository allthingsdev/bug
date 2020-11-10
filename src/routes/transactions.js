import express from 'express'
import { testEnvironmentVariable } from '../settings.js';

const transactionsRouter = express.Router();

transactionsRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default transactionsRouter;
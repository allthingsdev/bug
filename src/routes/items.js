import express from 'express'
import { testEnvironmentVariable } from '../settings.js'
const itemsRouter = express.Router();

itemsRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default itemsRouter;
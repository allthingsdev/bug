import express from 'express'
import { testEnvironmentVariable } from '../settings.js'
const modesRouter = express.Router();

modesRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default modesRouter;
import express from 'express'
import { testEnvironmentVariable } from '../settings.js';

const usersRouter = express.Router();

usersRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default usersRouter;
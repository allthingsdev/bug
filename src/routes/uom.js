import express from 'express'
import { testEnvironmentVariable } from '../settings.js';

const uomRouter = express.Router();

uomRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default uomRouter;
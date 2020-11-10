import express from 'express'
import { testEnvironmentVariable } from '../settings.js'
const categoriesRouter = express.Router();

categoriesRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: testEnvironmentVariable });
});

export default categoriesRouter;
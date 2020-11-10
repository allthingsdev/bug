import express from 'express'

const modesRouter = express.Router();

modesRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: 'The Payment Modes Module' });
});

export default modesRouter;
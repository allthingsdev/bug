import express from 'express'

const uomRouter = express.Router();

uomRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: 'The Units Of Measure Module' });
});

export default uomRouter;
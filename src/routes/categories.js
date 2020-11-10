import express from 'express'

const categoriesRouter = express.Router();

categoriesRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: 'The Categories Module' });
});

export default categoriesRouter;
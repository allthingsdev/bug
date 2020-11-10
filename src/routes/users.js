import express from 'express'

const usersRouter = express.Router();

usersRouter.get('/', function (req, res, next) {
    return res.status(200).json({ message: 'The Users Module' });
});

export default usersRouter;
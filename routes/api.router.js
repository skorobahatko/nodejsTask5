const {Router} = require('express');
const apiRouter = Router();
const {userController} = require('../controllers');
const userRouter = require('./user.router');
const authRouter = require('./auth.router');

// apiRouter.post('/create', userController.createUser);
apiRouter.use('/users', userRouter);
apiRouter.use('/auth', authRouter);

module.exports = apiRouter;

const { Router } = require ('express');
const userRouter = Router ();
const { userController } = require ('../controllers');
const { user } = require ('../middlewares');

userRouter.post ('/create', user.checkUserValidity, userController.createUser);

module.exports = userRouter;

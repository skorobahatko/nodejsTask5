const {Router} = require('express');
const apiRouter = Router();
const userController = require('../controllers/users.controller');

apiRouter.post('/', userController.createUser);

module.exports = apiRouter;

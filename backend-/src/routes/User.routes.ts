import { Router } from 'express';
import UserController from '../controllers/UserController';

const user = Router();

const userController = new UserController();

user.get('/users', userController.index);

user.post('/users', userController.create);

export default user;

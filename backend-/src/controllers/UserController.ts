import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    return response.json({ Message: 'Rota configurada' });
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userService = new UserService();

    const user = await userService.create({ name, email, password });
    return response.json(user);
  }
}

export default UserController;

import { getCustomRepository, Repository } from 'typeorm';
import User from '../models/User';
import UsersRepository from '../repositories/UserRepository';

interface IUser {
  name: string;
  email: string;
  password: string;
}

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ name, email, password }: IUser) {
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) {
      return userExists;
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
    });

    await this.usersRepository.save(user);
    return user;
  }
}

export default UsersService;

import { getCustomRepository } from 'typeorm';
import CompanyRepository from '../repositories/CompanyRepository';

interface ICompanyCreate {
  name: string;
  id_user_create: string;
}

class CompanyService {
  async create({ name, id_user_create }: ICompanyCreate) {
    const companyRepository = getCustomRepository(CompanyRepository);

    const company = companyRepository.create({
      name,
      id_user_create,
    });

    await companyRepository.save(company);
    return company;
  }
}

export default CompanyService;

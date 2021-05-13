import { getCustomRepository, Repository } from 'typeorm';
import CompanyOffice from '../models/CompanyOfficer';
import CompanyOfficeRepository from '../repositories/CompanyOfficerRepository';

interface IUser {
  reg_id_number: string;
  email: string;
  name: string;
  id_company: string;
}

class CompanyOfficeService {
  private companyOfficeRepository: Repository<CompanyOffice>;

  constructor() {
    this.companyOfficeRepository = getCustomRepository(CompanyOfficeRepository);
  }

  async index() {
    const users = await this.companyOfficeRepository.query(
      'SELECT * FROM company_officers',
    );

    return users;
  }

  async create({ reg_id_number, email, name, id_company }: IUser) {
    const companyExists = await this.companyOfficeRepository.findOne({ email });

    if (companyExists) {
      return companyExists;
    }

    const company = this.companyOfficeRepository.create({
      reg_id_number,
      email,
      name,
      id_company,
    });

    return company;
  }
}

export default CompanyOfficeService;

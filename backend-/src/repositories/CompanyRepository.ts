import { EntityRepository, Repository } from 'typeorm';
import Company from '../models/company';

@EntityRepository(Company)
class CompanyRepository extends Repository<Company> {}

export default CompanyRepository;

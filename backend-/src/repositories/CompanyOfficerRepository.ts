import { EntityRepository, Repository } from 'typeorm';
import CompanyOfficer from '../models/CompanyOfficer';

@EntityRepository(CompanyOfficer)
class CompanyOfficeRepository extends Repository<CompanyOfficer> {}

export default CompanyOfficeRepository;

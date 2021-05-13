import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import CompanyOfficerRelations from './CompanyOfficerRelations';
import Company from './company';

@Entity('company_officers')
class CompanyOfficer {
  @PrimaryColumn()
  reg_id_number: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @JoinColumn({ name: 'id_company' })
  @ManyToOne(() => Company, (company: Company) => company.companyOfficers)
  company: Company;

  @OneToMany(
    () => CompanyOfficerRelations,
    companyOffice => companyOffice.company,
  )
  companyRelation: CompanyOfficerRelations;

  @Column()
  id_company: string;
}

export default CompanyOfficer;

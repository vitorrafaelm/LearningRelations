import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import CompanyOfficer from './CompanyOfficer';
import User from './User';

@Entity('company_users_relation')
class CompanyOfficerRelations {
  @PrimaryColumn('uuid')
  id: string;

  @JoinColumn({ name: 'id_reg_id_number' })
  @ManyToOne(
    () => CompanyOfficer,
    (company: CompanyOfficer) => company.companyRelation,
  )
  company: CompanyOfficer;

  @Column()
  id_reg_id_number: string;

  @JoinColumn({ name: 'id_user' })
  @ManyToOne(() => User, (user: User) => user.userRelation)
  user: User;

  @Column()
  id_user: string;
}

export default CompanyOfficerRelations;

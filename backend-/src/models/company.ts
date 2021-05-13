import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import CompanyOfficer from './CompanyOfficer';
import User from './User';

@Entity('companies')
class Company {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @JoinColumn({ name: 'id_user_create' })
  @OneToOne(() => User)
  user: User;

  @OneToMany(() => CompanyOfficer, company => company.company)
  companyOfficers: CompanyOfficer;

  @Column()
  id_user_create: string;
}

export default Company;

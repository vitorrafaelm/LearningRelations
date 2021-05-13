import { Router } from 'express';
import CompanyController from '../controllers/CompanyController';

const companyOffice = Router();

const company = new CompanyController();

companyOffice.post('/company', company.create);

export default companyOffice;

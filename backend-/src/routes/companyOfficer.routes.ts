import { Router } from 'express';
import CompanyOfficeController from '../controllers/CompanyOfficerController';

const companyOffice = Router();

const company = new CompanyOfficeController();

companyOffice.get('/companyOffice', company.index);

companyOffice.post('/companyOffice', company.create);

export default companyOffice;

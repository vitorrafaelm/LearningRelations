import { Request, Response } from 'express';
import CompanyOfficeService from '../services/CompanyOfficeService';

class CompanyOfficeController {
  async index(request: Request, response: Response): Promise<Response> {
    const companyOfficeService = new CompanyOfficeService();

    const companyOffice = await companyOfficeService.index();

    return response.json(companyOffice);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { email, reg_id_number, name, id_company } = request.body;

    const companyOfficeService = new CompanyOfficeService();

    const companyOffice = await companyOfficeService.create({
      email,
      reg_id_number,
      name,
      id_company,
    });

    return response.json(companyOffice);
  }
}

export default CompanyOfficeController;

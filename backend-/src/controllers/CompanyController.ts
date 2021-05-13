import { Request, Response } from 'express';
import CompanyService from '../services/companyService';

class CompanyController {
  async create(request: Request, response: Response) {
    const companyService = new CompanyService();

    const { name, id_user_create } = request.body;

    const company = await companyService.create({
      name,
      id_user_create,
    });

    return response.json(company);
  }
}

export default CompanyController;

import { Router } from 'express';
import userRoutes from './User.routes';
import companyRoutes from './company.routes';
import companyOffice from './companyOfficer.routes';

const routes = Router();

routes.use('/', userRoutes);
routes.use('/', companyRoutes);
routes.use('/', companyOffice);

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
);

export default routes;

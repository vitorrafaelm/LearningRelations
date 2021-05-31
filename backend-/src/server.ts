import 'reflect-metadata';
import express from 'express';
import routes from './routes/index';
import swaggerUI from 'swagger-ui-express';

import './database/index';
import swaggerFile from './swagger/swagger_output.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));
app.use(routes);

app.listen(3333, () => {
  console.log('Server is running on port 3333!');
});

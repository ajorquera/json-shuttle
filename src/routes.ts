import { Router } from 'express';
import { helloWorldController, healthCheckController } from '@/controllers';
import DocsController from './controllers/docsController';

const routes = Router();

routes.get('/health', healthCheckController)
routes.get('/', helloWorldController);
routes.get('/docs/:fileName', DocsController);

export default routes;
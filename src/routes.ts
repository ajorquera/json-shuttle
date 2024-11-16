import { Router } from 'express';
import { healthCheckController } from '@/controllers';
import DocsController from './controllers/docsController';

const routes = Router();

routes.get('/health', healthCheckController)
routes.get('(*)/:fileName', DocsController);

export default routes;
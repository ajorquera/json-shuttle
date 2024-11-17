import { Router } from 'express';
import { healthCheckController } from '@/controllers';
import DocsController from './controllers/docsController';

const routes = Router();

routes.get('/health', healthCheckController)
routes.route('(*)/:fileName').get(DocsController).put(DocsController);

export default routes;
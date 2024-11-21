import { Router } from 'express';
import { healthCheckController } from '@/controllers';
import DocsController from './controllers/docsController';

const routes = Router();

routes.get('/health', healthCheckController)
routes.route('*').get(DocsController).put(DocsController).post(DocsController).delete(DocsController);

export default routes;
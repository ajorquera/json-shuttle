import { Router } from 'express';
import { helloWorldController, healthCheckController } from '@/controllers';

const routes = Router();

routes.get('/health', healthCheckController)
routes.get('/', helloWorldController);

export default routes;
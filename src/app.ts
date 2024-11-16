import express from 'express';
import errorHandler from './midlewares/errorHandler';
import routes from './routes';
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.set('json spaces', 2)

export default app;
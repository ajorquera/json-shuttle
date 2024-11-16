import errorHandler from './midlewares/errorHandler';
import routes from './routes';
import express from 'express';

const morgan = require('morgan');
const cors   = require('cors')

const app = express();

app.use(cors())
app.use(morgan('tiny'));
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.set('json spaces', 2)

export default app;
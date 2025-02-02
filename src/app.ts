import errorHandler from './midlewares/errorHandlerMIidleware';
import filterMiddleware from './midlewares/filtersMiddleware';
import routes from './routes';
import express from 'express';

const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(morgan('tiny'));
app.use(express.json());
app.use(filterMiddleware);


app.use(routes);
app.use(errorHandler);

app.set('json spaces', 2)

export default app;
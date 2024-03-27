import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { route } from './routes/index.route';

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

route(app);

app.listen(port, () => {
  console.log('Listen to ' + port);
});

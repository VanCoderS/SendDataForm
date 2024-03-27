import { Express } from 'express';

import { routerSendData } from './send-data.route';

export const route = (app: Express) => {
  app.use('/send-data', routerSendData);
};

import { Router } from 'express';

import * as controller from '../controllers/send-data.controller';

const router: Router = Router();

router.get('/', controller.sendDataGet);

router.post('/', controller.sendDataPost);

export const routerSendData = router;

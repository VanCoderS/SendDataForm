import { Request, Response } from 'express';

export const sendDataGet = (req: Request, res: Response) => {
  res.render('send-data-get', {
    pageTitle: 'SendDataGet',
    query: JSON.stringify(req.query),
  });
};

export const sendDataPost = (req: Request, res: Response) => {
  res.render('send-data-post', {
    pageTitle: 'SendDataPost',
    body: JSON.stringify(req.body),
  });
};

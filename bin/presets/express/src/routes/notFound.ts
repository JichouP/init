import { RequestHandler } from 'express';

const notFoundHandler: RequestHandler = (req, res, next) => {
  res.status(404);
};

export default notFoundHandler;

import { ErrorRequestHandler } from 'express';

const internalServerErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500);
  res.json({ message: err.message });
};

export default internalServerErrorHandler;

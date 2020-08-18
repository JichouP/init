import http from 'http';
import express, { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  res.status(404).send('Not Found');
  next();
});
app.use((err: Error, req: Request<ParamsDictionary>, res: Response<any>, next: NextFunction) => {
  res.status(500);
  res.json({ message: err.message });
});

if (process.env.NODE_ENV !== 'test') {
  http.createServer(app).listen(3000, () => {
    console.log('listening at 3000');
  });
}

export default app;

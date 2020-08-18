import { mockReq, mockRes } from 'sinon-express-mock';
import { NextFunction, Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export const createRequestMock = (request?: {}): [
  mockReq.MockReq & Request<ParamsDictionary>,
  mockRes.MockRes & Response,
  jest.Mock<any, any>
] => [mockReq(request), mockRes(), jest.fn()];

export const createHandler = (
  handler: (req: Request<ParamsDictionary>, res: Response<any>, next: NextFunction) => any
) => {
  return handler;
};

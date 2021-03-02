import { mockReq, mockRes } from 'sinon-express-mock';
import { Request, Response } from 'express';

export const createRequestMock = (
  request?: Record<string, unknown>
): {
  req: mockReq.MockReq & Request;
  res: mockRes.MockRes & Response;
  next: jest.Mock;
} => ({
  req: mockReq(request),
  res: mockRes(),
  next: jest.fn(),
});

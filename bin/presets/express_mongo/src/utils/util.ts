import { Mongoose } from 'mongoose';
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

export const connectMock = (
  mongoose: Mongoose,
  dbName: 'jest-routes' | 'jest-models' | 'jest-integration'
) => async () => {
  mongoose.Promise = global.Promise;
  await mongoose.connect((global as any).__MONGO_URI__, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: dbName,
  });
};
export const disconnectMock = (mongoose: Mongoose) => () => {
  mongoose.connection.close();
};

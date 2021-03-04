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
) => async (): Promise<void> => {
  mongoose.Promise = global.Promise;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await mongoose.connect((global as any).__MONGO_URI__, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: dbName,
  });
};
export const disconnectMock = (mongoose: Mongoose) => (): void => {
  mongoose.connection.close();
};

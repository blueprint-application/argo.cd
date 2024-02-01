import { ProtobufAnyModelOptions as ProtobufAny } from '../ProtobufAny';
import { BaseModel } from '../types';
import type { RuntimeStreamErrorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RuntimeStreamErrorModel extends BaseModel {
  details?: Array<ProtobufAny>;
  grpcCode?: number;
  httpCode?: number;
  httpStatus?: string;
  message?: string;

  constructor(data: RuntimeStreamErrorModelOptions) {
    super();
    validate(data);
    this.details = data.details;
    this.grpcCode = data.grpcCode;
    this.httpCode = data.httpCode;
    this.httpStatus = data.httpStatus;
    this.message = data.message;
  }

  static create(data: RuntimeStreamErrorModelOptions): RuntimeStreamErrorModel {
    return new RuntimeStreamErrorModel(data);
  }

  toObject(): Partial<this> {
    return {
      details: this.details,
      grpcCode: this.grpcCode,
      httpCode: this.httpCode,
      httpStatus: this.httpStatus,
      message: this.message,
    } as Partial<this>;
  }
}

export default RuntimeStreamErrorModel;

import { ProtobufAnyModelOptions as ProtobufAny } from '../ProtobufAny';
import { BaseModel } from '../types';
import type { RuntimeErrorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RuntimeErrorModel extends BaseModel {
  code?: number;
  details?: Array<ProtobufAny>;
  error?: string;
  message?: string;

  constructor(data: RuntimeErrorModelOptions) {
    super();
    validate(data);
    this.code = data.code;
    this.details = data.details;
    this.error = data.error;
    this.message = data.message;
  }

  static create(data: RuntimeErrorModelOptions): RuntimeErrorModel {
    return new RuntimeErrorModel(data);
  }

  toObject(): Partial<this> {
    return {
      code: this.code,
      details: this.details,
      error: this.error,
      message: this.message,
    } as Partial<this>;
  }
}

export default RuntimeErrorModel;

import { BaseModel } from '../types';
import type { V1PortStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1PortStatusModel extends BaseModel {
  error?: string;
  port?: number;
  protocol?: string;

  constructor(data: V1PortStatusModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.port = data.port;
    this.protocol = data.protocol;
  }

  static create(data: V1PortStatusModelOptions): V1PortStatusModel {
    return new V1PortStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      port: this.port,
      protocol: this.protocol,
    } as Partial<this>;
  }
}

export default V1PortStatusModel;

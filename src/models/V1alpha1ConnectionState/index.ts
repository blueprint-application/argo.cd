import { BaseModel } from '../types';
import type { V1alpha1ConnectionStateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ConnectionStateModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  attemptedAt?: Date;
  message?: string;
  status?: string;

  constructor(data: V1alpha1ConnectionStateModelOptions) {
    super();
    validate(data);
    this.attemptedAt = data.attemptedAt;
    this.message = data.message;
    this.status = data.status;
  }

  static create(data: V1alpha1ConnectionStateModelOptions): V1alpha1ConnectionStateModel {
    return new V1alpha1ConnectionStateModel(data);
  }

  toObject(): Partial<this> {
    return {
      attemptedAt: this.attemptedAt,
      message: this.message,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1ConnectionStateModel;

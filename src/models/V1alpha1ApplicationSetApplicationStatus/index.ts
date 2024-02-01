import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetApplicationStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetApplicationStatusModel extends BaseModel {
  application?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  lastTransitionTime?: Date;
  message?: string;
  status?: string;
  step?: string;

  constructor(data: V1alpha1ApplicationSetApplicationStatusModelOptions) {
    super();
    validate(data);
    this.application = data.application;
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.status = data.status;
    this.step = data.step;
  }

  static create(
    data: V1alpha1ApplicationSetApplicationStatusModelOptions,
  ): V1alpha1ApplicationSetApplicationStatusModel {
    return new V1alpha1ApplicationSetApplicationStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      application: this.application,
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      status: this.status,
      step: this.step,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetApplicationStatusModel;

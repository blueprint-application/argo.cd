import { BaseModel } from '../types';
import type { V1alpha1ApplicationConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  lastTransitionTime?: Date;
  message?: string;
  type?: string;

  constructor(data: V1alpha1ApplicationConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.type = data.type;
  }

  static create(data: V1alpha1ApplicationConditionModelOptions): V1alpha1ApplicationConditionModel {
    return new V1alpha1ApplicationConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      type: this.type,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationConditionModel;

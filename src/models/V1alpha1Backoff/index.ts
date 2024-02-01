import { BaseModel } from '../types';
import type { V1alpha1BackoffModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1BackoffModel extends BaseModel {
  duration?: string;
  factor?: string;
  maxDuration?: string;

  constructor(data: V1alpha1BackoffModelOptions) {
    super();
    validate(data);
    this.duration = data.duration;
    this.factor = data.factor;
    this.maxDuration = data.maxDuration;
  }

  static create(data: V1alpha1BackoffModelOptions): V1alpha1BackoffModel {
    return new V1alpha1BackoffModel(data);
  }

  toObject(): Partial<this> {
    return {
      duration: this.duration,
      factor: this.factor,
      maxDuration: this.maxDuration,
    } as Partial<this>;
  }
}

export default V1alpha1BackoffModel;

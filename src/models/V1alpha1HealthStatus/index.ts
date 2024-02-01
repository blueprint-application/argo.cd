import { BaseModel } from '../types';
import type { V1alpha1HealthStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1HealthStatusModel extends BaseModel {
  message?: string;
  status?: string;

  constructor(data: V1alpha1HealthStatusModelOptions) {
    super();
    validate(data);
    this.message = data.message;
    this.status = data.status;
  }

  static create(data: V1alpha1HealthStatusModelOptions): V1alpha1HealthStatusModel {
    return new V1alpha1HealthStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      message: this.message,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1HealthStatusModel;

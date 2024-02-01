import { BaseModel } from '../types';
import type { V1alpha1TagFilterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1TagFilterModel extends BaseModel {
  key?: string;
  value?: string;

  constructor(data: V1alpha1TagFilterModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.value = data.value;
  }

  static create(data: V1alpha1TagFilterModelOptions): V1alpha1TagFilterModel {
    return new V1alpha1TagFilterModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1TagFilterModel;

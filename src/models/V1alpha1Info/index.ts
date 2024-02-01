import { BaseModel } from '../types';
import type { V1alpha1InfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1InfoModel extends BaseModel {
  name?: string;
  value?: string;

  constructor(data: V1alpha1InfoModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: V1alpha1InfoModelOptions): V1alpha1InfoModel {
    return new V1alpha1InfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1InfoModel;

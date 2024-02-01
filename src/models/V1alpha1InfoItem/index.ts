import { BaseModel } from '../types';
import type { V1alpha1InfoItemModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1InfoItemModel extends BaseModel {
  // Name is a human readable title for this piece of information.
  name?: string;
  // Value is human readable content.
  value?: string;

  constructor(data: V1alpha1InfoItemModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: V1alpha1InfoItemModelOptions): V1alpha1InfoItemModel {
    return new V1alpha1InfoItemModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1InfoItemModel;

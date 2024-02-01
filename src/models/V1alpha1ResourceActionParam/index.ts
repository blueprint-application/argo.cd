import { BaseModel } from '../types';
import type { V1alpha1ResourceActionParamModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceActionParamModel extends BaseModel {
  _default?: string;
  name?: string;
  type?: string;
  value?: string;

  constructor(data: V1alpha1ResourceActionParamModelOptions) {
    super();
    validate(data);
    this._default = data._default;
    this.name = data.name;
    this.type = data.type;
    this.value = data.value;
  }

  static create(data: V1alpha1ResourceActionParamModelOptions): V1alpha1ResourceActionParamModel {
    return new V1alpha1ResourceActionParamModel(data);
  }

  toObject(): Partial<this> {
    return {
      _default: this._default,
      name: this.name,
      type: this.type,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceActionParamModel;

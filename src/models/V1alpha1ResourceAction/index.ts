import { V1alpha1ResourceActionParamModelOptions as V1alpha1ResourceActionParam } from '../V1alpha1ResourceActionParam';
import { BaseModel } from '../types';
import type { V1alpha1ResourceActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceActionModel extends BaseModel {
  disabled?: boolean;
  displayName?: string;
  iconClass?: string;
  name?: string;
  params?: Array<V1alpha1ResourceActionParam>;

  constructor(data: V1alpha1ResourceActionModelOptions) {
    super();
    validate(data);
    this.disabled = data.disabled;
    this.displayName = data.displayName;
    this.iconClass = data.iconClass;
    this.name = data.name;
    this.params = data.params;
  }

  static create(data: V1alpha1ResourceActionModelOptions): V1alpha1ResourceActionModel {
    return new V1alpha1ResourceActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      disabled: this.disabled,
      displayName: this.displayName,
      iconClass: this.iconClass,
      name: this.name,
      params: this.params,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceActionModel;

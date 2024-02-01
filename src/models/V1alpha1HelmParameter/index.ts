import { BaseModel } from '../types';
import type { V1alpha1HelmParameterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1HelmParameterModel extends BaseModel {
  forceString?: boolean;
  name?: string;
  value?: string;

  constructor(data: V1alpha1HelmParameterModelOptions) {
    super();
    validate(data);
    this.forceString = data.forceString;
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: V1alpha1HelmParameterModelOptions): V1alpha1HelmParameterModel {
    return new V1alpha1HelmParameterModel(data);
  }

  toObject(): Partial<this> {
    return {
      forceString: this.forceString,
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1HelmParameterModel;

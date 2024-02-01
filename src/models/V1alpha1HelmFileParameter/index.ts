import { BaseModel } from '../types';
import type { V1alpha1HelmFileParameterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1HelmFileParameterModel extends BaseModel {
  name?: string;
  path?: string;

  constructor(data: V1alpha1HelmFileParameterModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.path = data.path;
  }

  static create(data: V1alpha1HelmFileParameterModelOptions): V1alpha1HelmFileParameterModel {
    return new V1alpha1HelmFileParameterModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      path: this.path,
    } as Partial<this>;
  }
}

export default V1alpha1HelmFileParameterModel;

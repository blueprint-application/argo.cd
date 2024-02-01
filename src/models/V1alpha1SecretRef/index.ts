import { BaseModel } from '../types';
import type { V1alpha1SecretRefModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SecretRefModel extends BaseModel {
  key?: string;
  secretName?: string;

  constructor(data: V1alpha1SecretRefModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.secretName = data.secretName;
  }

  static create(data: V1alpha1SecretRefModelOptions): V1alpha1SecretRefModel {
    return new V1alpha1SecretRefModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      secretName: this.secretName,
    } as Partial<this>;
  }
}

export default V1alpha1SecretRefModel;

import { BaseModel } from '../types';
import type { V1alpha1JsonnetVarModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1JsonnetVarModel extends BaseModel {
  code?: boolean;
  name?: string;
  value?: string;

  constructor(data: V1alpha1JsonnetVarModelOptions) {
    super();
    validate(data);
    this.code = data.code;
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: V1alpha1JsonnetVarModelOptions): V1alpha1JsonnetVarModel {
    return new V1alpha1JsonnetVarModel(data);
  }

  toObject(): Partial<this> {
    return {
      code: this.code,
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default V1alpha1JsonnetVarModel;

import { V1alpha1JsonnetVarModelOptions as V1alpha1JsonnetVar } from '../V1alpha1JsonnetVar';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourceJsonnetModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourceJsonnetModel extends BaseModel {
  extVars?: Array<V1alpha1JsonnetVar>;
  libs?: Array<string>;
  tlas?: Array<V1alpha1JsonnetVar>;

  constructor(data: V1alpha1ApplicationSourceJsonnetModelOptions) {
    super();
    validate(data);
    this.extVars = data.extVars;
    this.libs = data.libs;
    this.tlas = data.tlas;
  }

  static create(data: V1alpha1ApplicationSourceJsonnetModelOptions): V1alpha1ApplicationSourceJsonnetModel {
    return new V1alpha1ApplicationSourceJsonnetModel(data);
  }

  toObject(): Partial<this> {
    return {
      extVars: this.extVars,
      libs: this.libs,
      tlas: this.tlas,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourceJsonnetModel;

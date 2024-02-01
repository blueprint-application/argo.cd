import { BaseModel } from '../types';
import type { V1alpha1ApplicationPreservedFieldsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationPreservedFieldsModel extends BaseModel {
  annotations?: Array<string>;

  constructor(data: V1alpha1ApplicationPreservedFieldsModelOptions) {
    super();
    validate(data);
    this.annotations = data.annotations;
  }

  static create(data: V1alpha1ApplicationPreservedFieldsModelOptions): V1alpha1ApplicationPreservedFieldsModel {
    return new V1alpha1ApplicationPreservedFieldsModel(data);
  }

  toObject(): Partial<this> {
    return {
      annotations: this.annotations,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationPreservedFieldsModel;

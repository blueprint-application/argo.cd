import { BaseModel } from '../types';
import type { V1alpha1KnownTypeFieldModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1KnownTypeFieldModel extends BaseModel {
  field?: string;
  type?: string;

  constructor(data: V1alpha1KnownTypeFieldModelOptions) {
    super();
    validate(data);
    this.field = data.field;
    this.type = data.type;
  }

  static create(data: V1alpha1KnownTypeFieldModelOptions): V1alpha1KnownTypeFieldModel {
    return new V1alpha1KnownTypeFieldModel(data);
  }

  toObject(): Partial<this> {
    return {
      field: this.field,
      type: this.type,
    } as Partial<this>;
  }
}

export default V1alpha1KnownTypeFieldModel;

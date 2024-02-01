import { BaseModel } from '../types';
import type { V1FieldsV1ModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1FieldsV1Model extends BaseModel {
  // Raw is the underlying serialization of this object.
  raw?: string;

  constructor(data: V1FieldsV1ModelOptions) {
    super();
    validate(data);
    this.raw = data.raw;
  }

  static create(data: V1FieldsV1ModelOptions): V1FieldsV1Model {
    return new V1FieldsV1Model(data);
  }

  toObject(): Partial<this> {
    return {
      raw: this.raw,
    } as Partial<this>;
  }
}

export default V1FieldsV1Model;

import { BaseModel } from '../types';
import type { RuntimeRawExtensionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RuntimeRawExtensionModel extends BaseModel {
  // Raw is the underlying serialization of this object.  TODO: Determine how to detect ContentType and ContentEncoding of \'Raw\' data.
  raw?: string;

  constructor(data: RuntimeRawExtensionModelOptions) {
    super();
    validate(data);
    this.raw = data.raw;
  }

  static create(data: RuntimeRawExtensionModelOptions): RuntimeRawExtensionModel {
    return new RuntimeRawExtensionModel(data);
  }

  toObject(): Partial<this> {
    return {
      raw: this.raw,
    } as Partial<this>;
  }
}

export default RuntimeRawExtensionModel;

import { BaseModel } from '../types';
import type { V1JSONModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1JSONModel extends BaseModel {
  raw?: string;

  constructor(data: V1JSONModelOptions) {
    super();
    validate(data);
    this.raw = data.raw;
  }

  static create(data: V1JSONModelOptions): V1JSONModel {
    return new V1JSONModel(data);
  }

  toObject(): Partial<this> {
    return {
      raw: this.raw,
    } as Partial<this>;
  }
}

export default V1JSONModel;

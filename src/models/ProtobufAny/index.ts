import { BaseModel } from '../types';
import type { ProtobufAnyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProtobufAnyModel extends BaseModel {
  typeUrl?: string;
  value?: string;

  constructor(data: ProtobufAnyModelOptions) {
    super();
    validate(data);
    this.typeUrl = data.typeUrl;
    this.value = data.value;
  }

  static create(data: ProtobufAnyModelOptions): ProtobufAnyModel {
    return new ProtobufAnyModel(data);
  }

  toObject(): Partial<this> {
    return {
      typeUrl: this.typeUrl,
      value: this.value,
    } as Partial<this>;
  }
}

export default ProtobufAnyModel;

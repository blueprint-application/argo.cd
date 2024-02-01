import { BaseModel } from '../types';
import type { V1GroupKindModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1GroupKindModel extends BaseModel {
  group?: string;
  kind?: string;

  constructor(data: V1GroupKindModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
  }

  static create(data: V1GroupKindModelOptions): V1GroupKindModel {
    return new V1GroupKindModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      kind: this.kind,
    } as Partial<this>;
  }
}

export default V1GroupKindModel;

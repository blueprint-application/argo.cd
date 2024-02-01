import { BaseModel } from '../types';
import type { V1alpha1OrphanedResourceKeyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OrphanedResourceKeyModel extends BaseModel {
  group?: string;
  kind?: string;
  name?: string;

  constructor(data: V1alpha1OrphanedResourceKeyModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
    this.name = data.name;
  }

  static create(data: V1alpha1OrphanedResourceKeyModelOptions): V1alpha1OrphanedResourceKeyModel {
    return new V1alpha1OrphanedResourceKeyModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      kind: this.kind,
      name: this.name,
    } as Partial<this>;
  }
}

export default V1alpha1OrphanedResourceKeyModel;

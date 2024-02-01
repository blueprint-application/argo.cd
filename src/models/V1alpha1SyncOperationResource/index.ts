import { BaseModel } from '../types';
import type { V1alpha1SyncOperationResourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncOperationResourceModel extends BaseModel {
  group?: string;
  kind?: string;
  name?: string;
  namespace?: string;

  constructor(data: V1alpha1SyncOperationResourceModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: V1alpha1SyncOperationResourceModelOptions): V1alpha1SyncOperationResourceModel {
    return new V1alpha1SyncOperationResourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default V1alpha1SyncOperationResourceModel;

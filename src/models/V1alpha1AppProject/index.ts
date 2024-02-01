import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1AppProjectSpecModelOptions as V1alpha1AppProjectSpec } from '../V1alpha1AppProjectSpec';
import { V1alpha1AppProjectStatusModelOptions as V1alpha1AppProjectStatus } from '../V1alpha1AppProjectStatus';
import { BaseModel } from '../types';
import type { V1alpha1AppProjectModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1AppProjectModel extends BaseModel {
  metadata?: V1ObjectMeta;
  spec?: V1alpha1AppProjectSpec;
  status?: V1alpha1AppProjectStatus;

  constructor(data: V1alpha1AppProjectModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: V1alpha1AppProjectModelOptions): V1alpha1AppProjectModel {
    return new V1alpha1AppProjectModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1AppProjectModel;

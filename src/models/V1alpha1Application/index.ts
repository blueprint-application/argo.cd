import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1ApplicationSpecModelOptions as V1alpha1ApplicationSpec } from '../V1alpha1ApplicationSpec';
import { V1alpha1ApplicationStatusModelOptions as V1alpha1ApplicationStatus } from '../V1alpha1ApplicationStatus';
import { V1alpha1OperationModelOptions as V1alpha1Operation } from '../V1alpha1Operation';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationModel extends BaseModel {
  metadata?: V1ObjectMeta;
  operation?: V1alpha1Operation;
  spec?: V1alpha1ApplicationSpec;
  status?: V1alpha1ApplicationStatus;

  constructor(data: V1alpha1ApplicationModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.operation = data.operation;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: V1alpha1ApplicationModelOptions): V1alpha1ApplicationModel {
    return new V1alpha1ApplicationModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      operation: this.operation,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationModel;

import { V1ObjectMetaModelOptions as V1ObjectMeta } from '../V1ObjectMeta';
import { V1alpha1ApplicationSetSpecModelOptions as V1alpha1ApplicationSetSpec } from '../V1alpha1ApplicationSetSpec';
import { V1alpha1ApplicationSetStatusModelOptions as V1alpha1ApplicationSetStatus } from '../V1alpha1ApplicationSetStatus';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetModel extends BaseModel {
  metadata?: V1ObjectMeta;
  spec?: V1alpha1ApplicationSetSpec;
  status?: V1alpha1ApplicationSetStatus;

  constructor(data: V1alpha1ApplicationSetModelOptions) {
    super();
    validate(data);
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(data: V1alpha1ApplicationSetModelOptions): V1alpha1ApplicationSetModel {
    return new V1alpha1ApplicationSetModel(data);
  }

  toObject(): Partial<this> {
    return {
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetModel;

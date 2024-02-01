import { V1alpha1ComparedToModelOptions as V1alpha1ComparedTo } from '../V1alpha1ComparedTo';
import { BaseModel } from '../types';
import type { V1alpha1SyncStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncStatusModel extends BaseModel {
  comparedTo?: V1alpha1ComparedTo;
  revision?: string;
  revisions?: Array<string>;
  status?: string;

  constructor(data: V1alpha1SyncStatusModelOptions) {
    super();
    validate(data);
    this.comparedTo = data.comparedTo;
    this.revision = data.revision;
    this.revisions = data.revisions;
    this.status = data.status;
  }

  static create(data: V1alpha1SyncStatusModelOptions): V1alpha1SyncStatusModel {
    return new V1alpha1SyncStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      comparedTo: this.comparedTo,
      revision: this.revision,
      revisions: this.revisions,
      status: this.status,
    } as Partial<this>;
  }
}

export default V1alpha1SyncStatusModel;

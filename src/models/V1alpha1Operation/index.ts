import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1OperationInitiatorModelOptions as V1alpha1OperationInitiator } from '../V1alpha1OperationInitiator';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncOperationModelOptions as V1alpha1SyncOperation } from '../V1alpha1SyncOperation';
import { BaseModel } from '../types';
import type { V1alpha1OperationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OperationModel extends BaseModel {
  info?: Array<V1alpha1Info>;
  initiatedBy?: V1alpha1OperationInitiator;
  retry?: V1alpha1RetryStrategy;
  sync?: V1alpha1SyncOperation;

  constructor(data: V1alpha1OperationModelOptions) {
    super();
    validate(data);
    this.info = data.info;
    this.initiatedBy = data.initiatedBy;
    this.retry = data.retry;
    this.sync = data.sync;
  }

  static create(data: V1alpha1OperationModelOptions): V1alpha1OperationModel {
    return new V1alpha1OperationModel(data);
  }

  toObject(): Partial<this> {
    return {
      info: this.info,
      initiatedBy: this.initiatedBy,
      retry: this.retry,
      sync: this.sync,
    } as Partial<this>;
  }
}

export default V1alpha1OperationModel;

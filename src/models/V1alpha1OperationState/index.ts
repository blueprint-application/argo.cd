import { V1alpha1OperationModelOptions as V1alpha1Operation } from '../V1alpha1Operation';
import { V1alpha1SyncOperationResultModelOptions as V1alpha1SyncOperationResult } from '../V1alpha1SyncOperationResult';
import { BaseModel } from '../types';
import type { V1alpha1OperationStateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OperationStateModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  finishedAt?: Date;
  // Message holds any pertinent messages when attempting to perform operation (typically errors).
  message?: string;
  operation?: V1alpha1Operation;
  phase?: string;
  retryCount?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  startedAt?: Date;
  syncResult?: V1alpha1SyncOperationResult;

  constructor(data: V1alpha1OperationStateModelOptions) {
    super();
    validate(data);
    this.finishedAt = data.finishedAt;
    this.message = data.message;
    this.operation = data.operation;
    this.phase = data.phase;
    this.retryCount = data.retryCount;
    this.startedAt = data.startedAt;
    this.syncResult = data.syncResult;
  }

  static create(data: V1alpha1OperationStateModelOptions): V1alpha1OperationStateModel {
    return new V1alpha1OperationStateModel(data);
  }

  toObject(): Partial<this> {
    return {
      finishedAt: this.finishedAt,
      message: this.message,
      operation: this.operation,
      phase: this.phase,
      retryCount: this.retryCount,
      startedAt: this.startedAt,
      syncResult: this.syncResult,
    } as Partial<this>;
  }
}

export default V1alpha1OperationStateModel;

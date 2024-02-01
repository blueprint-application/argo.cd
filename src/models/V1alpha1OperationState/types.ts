import { V1alpha1OperationModelOptions as V1alpha1Operation } from '../V1alpha1Operation';
import { V1alpha1SyncOperationResultModelOptions as V1alpha1SyncOperationResult } from '../V1alpha1SyncOperationResult';

export interface V1alpha1OperationStateModelOptions {
  finishedAt?: Date;
  message?: string;
  operation?: V1alpha1Operation;
  phase?: string;
  retryCount?: string;
  startedAt?: Date;
  syncResult?: V1alpha1SyncOperationResult;
}

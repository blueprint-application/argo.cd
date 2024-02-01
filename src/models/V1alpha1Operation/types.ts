import { V1alpha1InfoModelOptions as V1alpha1Info } from '../V1alpha1Info';
import { V1alpha1OperationInitiatorModelOptions as V1alpha1OperationInitiator } from '../V1alpha1OperationInitiator';
import { V1alpha1RetryStrategyModelOptions as V1alpha1RetryStrategy } from '../V1alpha1RetryStrategy';
import { V1alpha1SyncOperationModelOptions as V1alpha1SyncOperation } from '../V1alpha1SyncOperation';

export interface V1alpha1OperationModelOptions {
  info?: Array<V1alpha1Info>;
  initiatedBy?: V1alpha1OperationInitiator;
  retry?: V1alpha1RetryStrategy;
  sync?: V1alpha1SyncOperation;
}

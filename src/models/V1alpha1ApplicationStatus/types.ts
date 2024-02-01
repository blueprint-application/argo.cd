import { V1alpha1ApplicationConditionModelOptions as V1alpha1ApplicationCondition } from '../V1alpha1ApplicationCondition';
import { V1alpha1ApplicationSummaryModelOptions as V1alpha1ApplicationSummary } from '../V1alpha1ApplicationSummary';
import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';
import { V1alpha1OperationStateModelOptions as V1alpha1OperationState } from '../V1alpha1OperationState';
import { V1alpha1ResourceStatusModelOptions as V1alpha1ResourceStatus } from '../V1alpha1ResourceStatus';
import { V1alpha1RevisionHistoryModelOptions as V1alpha1RevisionHistory } from '../V1alpha1RevisionHistory';
import { V1alpha1SyncStatusModelOptions as V1alpha1SyncStatus } from '../V1alpha1SyncStatus';

export interface V1alpha1ApplicationStatusModelOptions {
  conditions?: Array<V1alpha1ApplicationCondition>;
  controllerNamespace?: string;
  health?: V1alpha1HealthStatus;
  history?: Array<V1alpha1RevisionHistory>;
  observedAt?: Date;
  operationState?: V1alpha1OperationState;
  reconciledAt?: Date;
  resourceHealthSource?: string;
  resources?: Array<V1alpha1ResourceStatus>;
  sourceType?: string;
  sourceTypes?: Array<string>;
  summary?: V1alpha1ApplicationSummary;
  sync?: V1alpha1SyncStatus;
}

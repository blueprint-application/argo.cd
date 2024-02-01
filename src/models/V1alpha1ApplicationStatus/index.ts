import { V1alpha1ApplicationConditionModelOptions as V1alpha1ApplicationCondition } from '../V1alpha1ApplicationCondition';
import { V1alpha1ApplicationSummaryModelOptions as V1alpha1ApplicationSummary } from '../V1alpha1ApplicationSummary';
import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';
import { V1alpha1OperationStateModelOptions as V1alpha1OperationState } from '../V1alpha1OperationState';
import { V1alpha1ResourceStatusModelOptions as V1alpha1ResourceStatus } from '../V1alpha1ResourceStatus';
import { V1alpha1RevisionHistoryModelOptions as V1alpha1RevisionHistory } from '../V1alpha1RevisionHistory';
import { V1alpha1SyncStatusModelOptions as V1alpha1SyncStatus } from '../V1alpha1SyncStatus';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationStatusModel extends BaseModel {
  conditions?: Array<V1alpha1ApplicationCondition>;
  controllerNamespace?: string;
  health?: V1alpha1HealthStatus;
  history?: Array<V1alpha1RevisionHistory>;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  observedAt?: Date;
  operationState?: V1alpha1OperationState;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  reconciledAt?: Date;
  resourceHealthSource?: string;
  resources?: Array<V1alpha1ResourceStatus>;
  sourceType?: string;
  sourceTypes?: Array<string>;
  summary?: V1alpha1ApplicationSummary;
  sync?: V1alpha1SyncStatus;

  constructor(data: V1alpha1ApplicationStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.controllerNamespace = data.controllerNamespace;
    this.health = data.health;
    this.history = data.history;
    this.observedAt = data.observedAt;
    this.operationState = data.operationState;
    this.reconciledAt = data.reconciledAt;
    this.resourceHealthSource = data.resourceHealthSource;
    this.resources = data.resources;
    this.sourceType = data.sourceType;
    this.sourceTypes = data.sourceTypes;
    this.summary = data.summary;
    this.sync = data.sync;
  }

  static create(data: V1alpha1ApplicationStatusModelOptions): V1alpha1ApplicationStatusModel {
    return new V1alpha1ApplicationStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      controllerNamespace: this.controllerNamespace,
      health: this.health,
      history: this.history,
      observedAt: this.observedAt,
      operationState: this.operationState,
      reconciledAt: this.reconciledAt,
      resourceHealthSource: this.resourceHealthSource,
      resources: this.resources,
      sourceType: this.sourceType,
      sourceTypes: this.sourceTypes,
      summary: this.summary,
      sync: this.sync,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationStatusModel;

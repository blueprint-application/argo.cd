import { BaseModel } from '../types';
import type { V1alpha1ResourceDiffModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceDiffModel extends BaseModel {
  diff?: string;
  group?: string;
  hook?: boolean;
  kind?: string;
  liveState?: string;
  modified?: boolean;
  name?: string;
  namespace?: string;
  normalizedLiveState?: string;
  predictedLiveState?: string;
  resourceVersion?: string;
  targetState?: string;

  constructor(data: V1alpha1ResourceDiffModelOptions) {
    super();
    validate(data);
    this.diff = data.diff;
    this.group = data.group;
    this.hook = data.hook;
    this.kind = data.kind;
    this.liveState = data.liveState;
    this.modified = data.modified;
    this.name = data.name;
    this.namespace = data.namespace;
    this.normalizedLiveState = data.normalizedLiveState;
    this.predictedLiveState = data.predictedLiveState;
    this.resourceVersion = data.resourceVersion;
    this.targetState = data.targetState;
  }

  static create(data: V1alpha1ResourceDiffModelOptions): V1alpha1ResourceDiffModel {
    return new V1alpha1ResourceDiffModel(data);
  }

  toObject(): Partial<this> {
    return {
      diff: this.diff,
      group: this.group,
      hook: this.hook,
      kind: this.kind,
      liveState: this.liveState,
      modified: this.modified,
      name: this.name,
      namespace: this.namespace,
      normalizedLiveState: this.normalizedLiveState,
      predictedLiveState: this.predictedLiveState,
      resourceVersion: this.resourceVersion,
      targetState: this.targetState,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceDiffModel;

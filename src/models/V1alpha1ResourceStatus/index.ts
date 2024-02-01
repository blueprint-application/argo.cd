import { V1alpha1HealthStatusModelOptions as V1alpha1HealthStatus } from '../V1alpha1HealthStatus';
import { BaseModel } from '../types';
import type { V1alpha1ResourceStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceStatusModel extends BaseModel {
  group?: string;
  health?: V1alpha1HealthStatus;
  hook?: boolean;
  kind?: string;
  name?: string;
  namespace?: string;
  requiresPruning?: boolean;
  status?: string;
  syncWave?: string;
  version?: string;

  constructor(data: V1alpha1ResourceStatusModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.health = data.health;
    this.hook = data.hook;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.requiresPruning = data.requiresPruning;
    this.status = data.status;
    this.syncWave = data.syncWave;
    this.version = data.version;
  }

  static create(data: V1alpha1ResourceStatusModelOptions): V1alpha1ResourceStatusModel {
    return new V1alpha1ResourceStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      health: this.health,
      hook: this.hook,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      requiresPruning: this.requiresPruning,
      status: this.status,
      syncWave: this.syncWave,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceStatusModel;

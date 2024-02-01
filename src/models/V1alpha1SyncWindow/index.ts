import { BaseModel } from '../types';
import type { V1alpha1SyncWindowModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SyncWindowModel extends BaseModel {
  applications?: Array<string>;
  clusters?: Array<string>;
  duration?: string;
  kind?: string;
  manualSync?: boolean;
  namespaces?: Array<string>;
  schedule?: string;
  timeZone?: string;

  constructor(data: V1alpha1SyncWindowModelOptions) {
    super();
    validate(data);
    this.applications = data.applications;
    this.clusters = data.clusters;
    this.duration = data.duration;
    this.kind = data.kind;
    this.manualSync = data.manualSync;
    this.namespaces = data.namespaces;
    this.schedule = data.schedule;
    this.timeZone = data.timeZone;
  }

  static create(data: V1alpha1SyncWindowModelOptions): V1alpha1SyncWindowModel {
    return new V1alpha1SyncWindowModel(data);
  }

  toObject(): Partial<this> {
    return {
      applications: this.applications,
      clusters: this.clusters,
      duration: this.duration,
      kind: this.kind,
      manualSync: this.manualSync,
      namespaces: this.namespaces,
      schedule: this.schedule,
      timeZone: this.timeZone,
    } as Partial<this>;
  }
}

export default V1alpha1SyncWindowModel;

import { BaseModel } from '../types';
import type { ApplicationApplicationSyncWindowModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationSyncWindowModel extends BaseModel {
  duration?: string;
  kind?: string;
  manualSync?: boolean;
  schedule?: string;

  constructor(data: ApplicationApplicationSyncWindowModelOptions) {
    super();
    validate(data);
    this.duration = data.duration;
    this.kind = data.kind;
    this.manualSync = data.manualSync;
    this.schedule = data.schedule;
  }

  static create(data: ApplicationApplicationSyncWindowModelOptions): ApplicationApplicationSyncWindowModel {
    return new ApplicationApplicationSyncWindowModel(data);
  }

  toObject(): Partial<this> {
    return {
      duration: this.duration,
      kind: this.kind,
      manualSync: this.manualSync,
      schedule: this.schedule,
    } as Partial<this>;
  }
}

export default ApplicationApplicationSyncWindowModel;

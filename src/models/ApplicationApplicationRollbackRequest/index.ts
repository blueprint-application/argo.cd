import { BaseModel } from '../types';
import type { ApplicationApplicationRollbackRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationRollbackRequestModel extends BaseModel {
  appNamespace?: string;
  dryRun?: boolean;
  id?: string;
  name?: string;
  project?: string;
  prune?: boolean;

  constructor(data: ApplicationApplicationRollbackRequestModelOptions) {
    super();
    validate(data);
    this.appNamespace = data.appNamespace;
    this.dryRun = data.dryRun;
    this.id = data.id;
    this.name = data.name;
    this.project = data.project;
    this.prune = data.prune;
  }

  static create(data: ApplicationApplicationRollbackRequestModelOptions): ApplicationApplicationRollbackRequestModel {
    return new ApplicationApplicationRollbackRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      appNamespace: this.appNamespace,
      dryRun: this.dryRun,
      id: this.id,
      name: this.name,
      project: this.project,
      prune: this.prune,
    } as Partial<this>;
  }
}

export default ApplicationApplicationRollbackRequestModel;

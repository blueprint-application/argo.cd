import { BaseModel } from '../types';
import type { ApplicationApplicationPatchRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationPatchRequestModel extends BaseModel {
  appNamespace?: string;
  name?: string;
  patch?: string;
  patchType?: string;
  project?: string;

  constructor(data: ApplicationApplicationPatchRequestModelOptions) {
    super();
    validate(data);
    this.appNamespace = data.appNamespace;
    this.name = data.name;
    this.patch = data.patch;
    this.patchType = data.patchType;
    this.project = data.project;
  }

  static create(data: ApplicationApplicationPatchRequestModelOptions): ApplicationApplicationPatchRequestModel {
    return new ApplicationApplicationPatchRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      appNamespace: this.appNamespace,
      name: this.name,
      patch: this.patch,
      patchType: this.patchType,
      project: this.project,
    } as Partial<this>;
  }
}

export default ApplicationApplicationPatchRequestModel;

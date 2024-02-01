import { V1alpha1ApplicationSetModelOptions as V1alpha1ApplicationSet } from '../V1alpha1ApplicationSet';
import { BaseModel } from '../types';
import type { ApplicationsetApplicationSetResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationsetApplicationSetResponseModel extends BaseModel {
  applicationset?: V1alpha1ApplicationSet;
  project?: string;

  constructor(data: ApplicationsetApplicationSetResponseModelOptions) {
    super();
    validate(data);
    this.applicationset = data.applicationset;
    this.project = data.project;
  }

  static create(data: ApplicationsetApplicationSetResponseModelOptions): ApplicationsetApplicationSetResponseModel {
    return new ApplicationsetApplicationSetResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      applicationset: this.applicationset,
      project: this.project,
    } as Partial<this>;
  }
}

export default ApplicationsetApplicationSetResponseModel;

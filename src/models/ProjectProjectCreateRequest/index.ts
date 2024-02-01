import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { BaseModel } from '../types';
import type { ProjectProjectCreateRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectProjectCreateRequestModel extends BaseModel {
  project?: V1alpha1AppProject;
  upsert?: boolean;

  constructor(data: ProjectProjectCreateRequestModelOptions) {
    super();
    validate(data);
    this.project = data.project;
    this.upsert = data.upsert;
  }

  static create(data: ProjectProjectCreateRequestModelOptions): ProjectProjectCreateRequestModel {
    return new ProjectProjectCreateRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      project: this.project,
      upsert: this.upsert,
    } as Partial<this>;
  }
}

export default ProjectProjectCreateRequestModel;

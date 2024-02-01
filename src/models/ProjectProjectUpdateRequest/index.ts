import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { BaseModel } from '../types';
import type { ProjectProjectUpdateRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectProjectUpdateRequestModel extends BaseModel {
  project?: V1alpha1AppProject;

  constructor(data: ProjectProjectUpdateRequestModelOptions) {
    super();
    validate(data);
    this.project = data.project;
  }

  static create(data: ProjectProjectUpdateRequestModelOptions): ProjectProjectUpdateRequestModel {
    return new ProjectProjectUpdateRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      project: this.project,
    } as Partial<this>;
  }
}

export default ProjectProjectUpdateRequestModel;

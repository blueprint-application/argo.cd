import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { BaseModel } from '../types';
import type { ProjectGlobalProjectsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectGlobalProjectsResponseModel extends BaseModel {
  items?: Array<V1alpha1AppProject>;

  constructor(data: ProjectGlobalProjectsResponseModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: ProjectGlobalProjectsResponseModelOptions): ProjectGlobalProjectsResponseModel {
    return new ProjectGlobalProjectsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default ProjectGlobalProjectsResponseModel;

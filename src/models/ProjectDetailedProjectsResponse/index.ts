import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { V1alpha1ClusterModelOptions as V1alpha1Cluster } from '../V1alpha1Cluster';
import { V1alpha1RepositoryModelOptions as V1alpha1Repository } from '../V1alpha1Repository';
import { BaseModel } from '../types';
import type { ProjectDetailedProjectsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectDetailedProjectsResponseModel extends BaseModel {
  clusters?: Array<V1alpha1Cluster>;
  globalProjects?: Array<V1alpha1AppProject>;
  project?: V1alpha1AppProject;
  repositories?: Array<V1alpha1Repository>;

  constructor(data: ProjectDetailedProjectsResponseModelOptions) {
    super();
    validate(data);
    this.clusters = data.clusters;
    this.globalProjects = data.globalProjects;
    this.project = data.project;
    this.repositories = data.repositories;
  }

  static create(data: ProjectDetailedProjectsResponseModelOptions): ProjectDetailedProjectsResponseModel {
    return new ProjectDetailedProjectsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      clusters: this.clusters,
      globalProjects: this.globalProjects,
      project: this.project,
      repositories: this.repositories,
    } as Partial<this>;
  }
}

export default ProjectDetailedProjectsResponseModel;

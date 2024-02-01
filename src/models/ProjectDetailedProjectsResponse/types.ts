import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { V1alpha1ClusterModelOptions as V1alpha1Cluster } from '../V1alpha1Cluster';
import { V1alpha1RepositoryModelOptions as V1alpha1Repository } from '../V1alpha1Repository';

export interface ProjectDetailedProjectsResponseModelOptions {
  clusters?: Array<V1alpha1Cluster>;
  globalProjects?: Array<V1alpha1AppProject>;
  project?: V1alpha1AppProject;
  repositories?: Array<V1alpha1Repository>;
}

import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';

export interface V1alpha1AppProjectListModelOptions {
  items?: Array<V1alpha1AppProject>;
  metadata?: V1ListMeta;
}

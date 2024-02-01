import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ClusterModelOptions as V1alpha1Cluster } from '../V1alpha1Cluster';

export interface V1alpha1ClusterListModelOptions {
  items?: Array<V1alpha1Cluster>;
  metadata?: V1ListMeta;
}

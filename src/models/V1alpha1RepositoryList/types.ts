import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepositoryModelOptions as V1alpha1Repository } from '../V1alpha1Repository';

export interface V1alpha1RepositoryListModelOptions {
  items?: Array<V1alpha1Repository>;
  metadata?: V1ListMeta;
}

import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepoCredsModelOptions as V1alpha1RepoCreds } from '../V1alpha1RepoCreds';

export interface V1alpha1RepoCredsListModelOptions {
  items?: Array<V1alpha1RepoCreds>;
  metadata?: V1ListMeta;
}

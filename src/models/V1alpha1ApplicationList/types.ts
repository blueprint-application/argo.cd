import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ApplicationModelOptions as V1alpha1Application } from '../V1alpha1Application';

export interface V1alpha1ApplicationListModelOptions {
  items?: Array<V1alpha1Application>;
  metadata?: V1ListMeta;
}

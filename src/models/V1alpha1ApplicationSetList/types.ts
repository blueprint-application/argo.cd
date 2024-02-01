import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ApplicationSetModelOptions as V1alpha1ApplicationSet } from '../V1alpha1ApplicationSet';

export interface V1alpha1ApplicationSetListModelOptions {
  items?: Array<V1alpha1ApplicationSet>;
  metadata?: V1ListMeta;
}

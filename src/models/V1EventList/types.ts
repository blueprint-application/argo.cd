import { V1EventModelOptions as V1Event } from '../V1Event';
import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';

export interface V1EventListModelOptions {
  items?: Array<V1Event>;
  metadata?: V1ListMeta;
}

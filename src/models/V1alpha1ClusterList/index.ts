import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ClusterModelOptions as V1alpha1Cluster } from '../V1alpha1Cluster';
import { BaseModel } from '../types';
import type { V1alpha1ClusterListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterListModel extends BaseModel {
  items?: Array<V1alpha1Cluster>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1ClusterListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1ClusterListModelOptions): V1alpha1ClusterListModel {
    return new V1alpha1ClusterListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterListModel;

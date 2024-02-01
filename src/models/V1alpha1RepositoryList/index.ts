import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepositoryModelOptions as V1alpha1Repository } from '../V1alpha1Repository';
import { BaseModel } from '../types';
import type { V1alpha1RepositoryListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepositoryListModel extends BaseModel {
  items?: Array<V1alpha1Repository>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1RepositoryListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1RepositoryListModelOptions): V1alpha1RepositoryListModel {
    return new V1alpha1RepositoryListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1RepositoryListModel;

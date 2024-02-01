import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepoCredsModelOptions as V1alpha1RepoCreds } from '../V1alpha1RepoCreds';
import { BaseModel } from '../types';
import type { V1alpha1RepoCredsListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepoCredsListModel extends BaseModel {
  items?: Array<V1alpha1RepoCreds>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1RepoCredsListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1RepoCredsListModelOptions): V1alpha1RepoCredsListModel {
    return new V1alpha1RepoCredsListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1RepoCredsListModel;

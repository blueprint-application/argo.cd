import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepositoryCertificateModelOptions as V1alpha1RepositoryCertificate } from '../V1alpha1RepositoryCertificate';
import { BaseModel } from '../types';
import type { V1alpha1RepositoryCertificateListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1RepositoryCertificateListModel extends BaseModel {
  items?: Array<V1alpha1RepositoryCertificate>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1RepositoryCertificateListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1RepositoryCertificateListModelOptions): V1alpha1RepositoryCertificateListModel {
    return new V1alpha1RepositoryCertificateListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1RepositoryCertificateListModel;

import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1GnuPGPublicKeyModelOptions as V1alpha1GnuPGPublicKey } from '../V1alpha1GnuPGPublicKey';
import { BaseModel } from '../types';
import type { V1alpha1GnuPGPublicKeyListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1GnuPGPublicKeyListModel extends BaseModel {
  items?: Array<V1alpha1GnuPGPublicKey>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1GnuPGPublicKeyListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1GnuPGPublicKeyListModelOptions): V1alpha1GnuPGPublicKeyListModel {
    return new V1alpha1GnuPGPublicKeyListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1GnuPGPublicKeyListModel;

import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ApplicationModelOptions as V1alpha1Application } from '../V1alpha1Application';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationListModel extends BaseModel {
  items?: Array<V1alpha1Application>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1ApplicationListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1ApplicationListModelOptions): V1alpha1ApplicationListModel {
    return new V1alpha1ApplicationListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationListModel;

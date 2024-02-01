import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1ApplicationSetModelOptions as V1alpha1ApplicationSet } from '../V1alpha1ApplicationSet';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSetListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSetListModel extends BaseModel {
  items?: Array<V1alpha1ApplicationSet>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1ApplicationSetListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1ApplicationSetListModelOptions): V1alpha1ApplicationSetListModel {
    return new V1alpha1ApplicationSetListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSetListModel;

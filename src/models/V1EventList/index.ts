import { V1EventModelOptions as V1Event } from '../V1Event';
import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { BaseModel } from '../types';
import type { V1EventListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1EventListModel extends BaseModel {
  items?: Array<V1Event>;
  metadata?: V1ListMeta;

  constructor(data: V1EventListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1EventListModelOptions): V1EventListModel {
    return new V1EventListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1EventListModel;

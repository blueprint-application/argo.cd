import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1AppProjectModelOptions as V1alpha1AppProject } from '../V1alpha1AppProject';
import { BaseModel } from '../types';
import type { V1alpha1AppProjectListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1AppProjectListModel extends BaseModel {
  items?: Array<V1alpha1AppProject>;
  metadata?: V1ListMeta;

  constructor(data: V1alpha1AppProjectListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.metadata = data.metadata;
  }

  static create(data: V1alpha1AppProjectListModelOptions): V1alpha1AppProjectListModel {
    return new V1alpha1AppProjectListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default V1alpha1AppProjectListModel;

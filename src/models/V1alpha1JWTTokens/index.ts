import { V1alpha1JWTTokenModelOptions as V1alpha1JWTToken } from '../V1alpha1JWTToken';
import { BaseModel } from '../types';
import type { V1alpha1JWTTokensModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1JWTTokensModel extends BaseModel {
  items?: Array<V1alpha1JWTToken>;

  constructor(data: V1alpha1JWTTokensModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: V1alpha1JWTTokensModelOptions): V1alpha1JWTTokensModel {
    return new V1alpha1JWTTokensModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default V1alpha1JWTTokensModel;

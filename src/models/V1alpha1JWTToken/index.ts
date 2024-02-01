import { BaseModel } from '../types';
import type { V1alpha1JWTTokenModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1JWTTokenModel extends BaseModel {
  exp?: string;
  iat?: string;
  id?: string;

  constructor(data: V1alpha1JWTTokenModelOptions) {
    super();
    validate(data);
    this.exp = data.exp;
    this.iat = data.iat;
    this.id = data.id;
  }

  static create(data: V1alpha1JWTTokenModelOptions): V1alpha1JWTTokenModel {
    return new V1alpha1JWTTokenModel(data);
  }

  toObject(): Partial<this> {
    return {
      exp: this.exp,
      iat: this.iat,
      id: this.id,
    } as Partial<this>;
  }
}

export default V1alpha1JWTTokenModel;

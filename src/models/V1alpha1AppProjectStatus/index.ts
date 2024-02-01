import { V1alpha1JWTTokensModelOptions as V1alpha1JWTTokens } from '../V1alpha1JWTTokens';
import { BaseModel } from '../types';
import type { V1alpha1AppProjectStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1AppProjectStatusModel extends BaseModel {
  jwtTokensByRole?: { [key: string]: V1alpha1JWTTokens };

  constructor(data: V1alpha1AppProjectStatusModelOptions) {
    super();
    validate(data);
    this.jwtTokensByRole = data.jwtTokensByRole;
  }

  static create(data: V1alpha1AppProjectStatusModelOptions): V1alpha1AppProjectStatusModel {
    return new V1alpha1AppProjectStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      jwtTokensByRole: this.jwtTokensByRole,
    } as Partial<this>;
  }
}

export default V1alpha1AppProjectStatusModel;

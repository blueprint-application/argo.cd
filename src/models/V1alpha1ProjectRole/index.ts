import { V1alpha1JWTTokenModelOptions as V1alpha1JWTToken } from '../V1alpha1JWTToken';
import { BaseModel } from '../types';
import type { V1alpha1ProjectRoleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ProjectRoleModel extends BaseModel {
  description?: string;
  groups?: Array<string>;
  jwtTokens?: Array<V1alpha1JWTToken>;
  name?: string;
  policies?: Array<string>;

  constructor(data: V1alpha1ProjectRoleModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.groups = data.groups;
    this.jwtTokens = data.jwtTokens;
    this.name = data.name;
    this.policies = data.policies;
  }

  static create(data: V1alpha1ProjectRoleModelOptions): V1alpha1ProjectRoleModel {
    return new V1alpha1ProjectRoleModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      groups: this.groups,
      jwtTokens: this.jwtTokens,
      name: this.name,
      policies: this.policies,
    } as Partial<this>;
  }
}

export default V1alpha1ProjectRoleModel;

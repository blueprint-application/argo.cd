import { V1alpha1JWTTokenModelOptions as V1alpha1JWTToken } from '../V1alpha1JWTToken';

export interface V1alpha1ProjectRoleModelOptions {
  description?: string;
  groups?: Array<string>;
  jwtTokens?: Array<V1alpha1JWTToken>;
  name?: string;
  policies?: Array<string>;
}

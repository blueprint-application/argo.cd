import { V1alpha1JWTTokensModelOptions as V1alpha1JWTTokens } from '../V1alpha1JWTTokens';

export interface V1alpha1AppProjectStatusModelOptions {
  jwtTokensByRole?: { [key: string]: V1alpha1JWTTokens };
}

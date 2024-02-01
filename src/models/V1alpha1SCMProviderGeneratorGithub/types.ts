import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1SCMProviderGeneratorGithubModelOptions {
  allBranches?: boolean;
  api?: string;
  appSecretName?: string;
  organization?: string;
  tokenRef?: V1alpha1SecretRef;
}

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1SCMProviderGeneratorGitlabModelOptions {
  allBranches?: boolean;
  api?: string;
  group?: string;
  includeSubgroups?: boolean;
  insecure?: boolean;
  tokenRef?: V1alpha1SecretRef;
}

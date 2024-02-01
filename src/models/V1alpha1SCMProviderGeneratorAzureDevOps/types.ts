import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions {
  accessTokenRef?: V1alpha1SecretRef;
  allBranches?: boolean;
  api?: string;
  organization?: string;
  teamProject?: string;
}

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1PullRequestGeneratorAzureDevOpsModelOptions {
  api?: string;
  labels?: Array<string>;
  organization?: string;
  project?: string;
  repo?: string;
  tokenRef?: V1alpha1SecretRef;
}

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1PullRequestGeneratorGithubModelOptions {
  api?: string;
  appSecretName?: string;
  labels?: Array<string>;
  owner?: string;
  repo?: string;
  tokenRef?: V1alpha1SecretRef;
}

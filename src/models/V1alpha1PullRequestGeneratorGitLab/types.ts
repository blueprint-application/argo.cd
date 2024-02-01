import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1PullRequestGeneratorGitLabModelOptions {
  api?: string;
  insecure?: boolean;
  labels?: Array<string>;
  project?: string;
  pullRequestState?: string;
  tokenRef?: V1alpha1SecretRef;
}

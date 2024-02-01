import { V1alpha1BasicAuthBitbucketServerModelOptions as V1alpha1BasicAuthBitbucketServer } from '../V1alpha1BasicAuthBitbucketServer';

export interface V1alpha1SCMProviderGeneratorBitbucketServerModelOptions {
  allBranches?: boolean;
  api?: string;
  basicAuth?: V1alpha1BasicAuthBitbucketServer;
  project?: string;
}

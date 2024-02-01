import { V1alpha1BasicAuthBitbucketServerModelOptions as V1alpha1BasicAuthBitbucketServer } from '../V1alpha1BasicAuthBitbucketServer';
import { V1alpha1BearerTokenBitbucketCloudModelOptions as V1alpha1BearerTokenBitbucketCloud } from '../V1alpha1BearerTokenBitbucketCloud';

export interface V1alpha1PullRequestGeneratorBitbucketModelOptions {
  api?: string;
  basicAuth?: V1alpha1BasicAuthBitbucketServer;
  bearerToken?: V1alpha1BearerTokenBitbucketCloud;
  owner?: string;
  repo?: string;
}

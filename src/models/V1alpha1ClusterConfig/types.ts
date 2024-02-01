import { V1alpha1AWSAuthConfigModelOptions as V1alpha1AWSAuthConfig } from '../V1alpha1AWSAuthConfig';
import { V1alpha1ExecProviderConfigModelOptions as V1alpha1ExecProviderConfig } from '../V1alpha1ExecProviderConfig';
import { V1alpha1TLSClientConfigModelOptions as V1alpha1TLSClientConfig } from '../V1alpha1TLSClientConfig';

export interface V1alpha1ClusterConfigModelOptions {
  awsAuthConfig?: V1alpha1AWSAuthConfig;
  bearerToken?: string;
  execProviderConfig?: V1alpha1ExecProviderConfig;
  password?: string;
  tlsClientConfig?: V1alpha1TLSClientConfig;
  username?: string;
}

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';

export interface V1alpha1BasicAuthBitbucketServerModelOptions {
  passwordRef?: V1alpha1SecretRef;
  username?: string;
}

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1BearerTokenBitbucketCloudModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1BearerTokenBitbucketCloudModel extends BaseModel {
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1BearerTokenBitbucketCloudModelOptions) {
    super();
    validate(data);
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1BearerTokenBitbucketCloudModelOptions): V1alpha1BearerTokenBitbucketCloudModel {
    return new V1alpha1BearerTokenBitbucketCloudModel(data);
  }

  toObject(): Partial<this> {
    return {
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1BearerTokenBitbucketCloudModel;

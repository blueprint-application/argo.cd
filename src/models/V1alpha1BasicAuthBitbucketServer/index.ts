import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1BasicAuthBitbucketServerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1BasicAuthBitbucketServerModel extends BaseModel {
  passwordRef?: V1alpha1SecretRef;
  username?: string;

  constructor(data: V1alpha1BasicAuthBitbucketServerModelOptions) {
    super();
    validate(data);
    this.passwordRef = data.passwordRef;
    this.username = data.username;
  }

  static create(data: V1alpha1BasicAuthBitbucketServerModelOptions): V1alpha1BasicAuthBitbucketServerModel {
    return new V1alpha1BasicAuthBitbucketServerModel(data);
  }

  toObject(): Partial<this> {
    return {
      passwordRef: this.passwordRef,
      username: this.username,
    } as Partial<this>;
  }
}

export default V1alpha1BasicAuthBitbucketServerModel;

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorBitbucketModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorBitbucketModel extends BaseModel {
  // Scan all branches instead of just the main branch.
  allBranches?: boolean;
  appPasswordRef?: V1alpha1SecretRef;
  // Bitbucket workspace to scan. Required.
  owner?: string;
  user?: string;

  constructor(data: V1alpha1SCMProviderGeneratorBitbucketModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.appPasswordRef = data.appPasswordRef;
    this.owner = data.owner;
    this.user = data.user;
  }

  static create(data: V1alpha1SCMProviderGeneratorBitbucketModelOptions): V1alpha1SCMProviderGeneratorBitbucketModel {
    return new V1alpha1SCMProviderGeneratorBitbucketModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      appPasswordRef: this.appPasswordRef,
      owner: this.owner,
      user: this.user,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorBitbucketModel;

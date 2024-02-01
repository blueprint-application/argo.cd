import { V1alpha1BasicAuthBitbucketServerModelOptions as V1alpha1BasicAuthBitbucketServer } from '../V1alpha1BasicAuthBitbucketServer';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorBitbucketServerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorBitbucketServerModel extends BaseModel {
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // The Bitbucket Server REST API URL to talk to. Required.
  api?: string;
  basicAuth?: V1alpha1BasicAuthBitbucketServer;
  // Project to scan. Required.
  project?: string;

  constructor(data: V1alpha1SCMProviderGeneratorBitbucketServerModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.api = data.api;
    this.basicAuth = data.basicAuth;
    this.project = data.project;
  }

  static create(
    data: V1alpha1SCMProviderGeneratorBitbucketServerModelOptions,
  ): V1alpha1SCMProviderGeneratorBitbucketServerModel {
    return new V1alpha1SCMProviderGeneratorBitbucketServerModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      api: this.api,
      basicAuth: this.basicAuth,
      project: this.project,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorBitbucketServerModel;

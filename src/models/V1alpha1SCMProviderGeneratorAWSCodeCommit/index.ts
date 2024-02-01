import { V1alpha1TagFilterModelOptions as V1alpha1TagFilter } from '../V1alpha1TagFilter';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorAWSCodeCommitModel extends BaseModel {
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // Region provides the AWS region to discover repos. if not provided, AppSet controller will infer the current region from environment.
  region?: string;
  // Role provides the AWS IAM role to assume, for cross-account repo discovery if not provided, AppSet controller will use its pod/node identity to discover.
  role?: string;
  tagFilters?: Array<V1alpha1TagFilter>;

  constructor(data: V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.region = data.region;
    this.role = data.role;
    this.tagFilters = data.tagFilters;
  }

  static create(
    data: V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions,
  ): V1alpha1SCMProviderGeneratorAWSCodeCommitModel {
    return new V1alpha1SCMProviderGeneratorAWSCodeCommitModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      region: this.region,
      role: this.role,
      tagFilters: this.tagFilters,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorAWSCodeCommitModel;

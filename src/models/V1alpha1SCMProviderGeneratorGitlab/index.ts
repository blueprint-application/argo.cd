import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorGitlabModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorGitlabModel extends BaseModel {
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // The Gitlab API URL to talk to.
  api?: string;
  // Gitlab group to scan. Required.  You can use either the project id (recommended) or the full namespaced path.
  group?: string;
  includeSubgroups?: boolean;
  insecure?: boolean;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1SCMProviderGeneratorGitlabModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.api = data.api;
    this.group = data.group;
    this.includeSubgroups = data.includeSubgroups;
    this.insecure = data.insecure;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1SCMProviderGeneratorGitlabModelOptions): V1alpha1SCMProviderGeneratorGitlabModel {
    return new V1alpha1SCMProviderGeneratorGitlabModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      api: this.api,
      group: this.group,
      includeSubgroups: this.includeSubgroups,
      insecure: this.insecure,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorGitlabModel;

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorGithubModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorGithubModel extends BaseModel {
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // The GitHub API URL to talk to. If blank, use https://api.github.com/.
  api?: string;
  // AppSecretName is a reference to a GitHub App repo-creds secret.
  appSecretName?: string;
  // GitHub org to scan. Required.
  organization?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1SCMProviderGeneratorGithubModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.api = data.api;
    this.appSecretName = data.appSecretName;
    this.organization = data.organization;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1SCMProviderGeneratorGithubModelOptions): V1alpha1SCMProviderGeneratorGithubModel {
    return new V1alpha1SCMProviderGeneratorGithubModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      api: this.api,
      appSecretName: this.appSecretName,
      organization: this.organization,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorGithubModel;

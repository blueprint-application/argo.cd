import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorGiteaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorGiteaModel extends BaseModel {
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // The Gitea URL to talk to. For example https://gitea.mydomain.com/.
  api?: string;
  insecure?: boolean;
  // Gitea organization or user to scan. Required.
  owner?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1SCMProviderGeneratorGiteaModelOptions) {
    super();
    validate(data);
    this.allBranches = data.allBranches;
    this.api = data.api;
    this.insecure = data.insecure;
    this.owner = data.owner;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1SCMProviderGeneratorGiteaModelOptions): V1alpha1SCMProviderGeneratorGiteaModel {
    return new V1alpha1SCMProviderGeneratorGiteaModel(data);
  }

  toObject(): Partial<this> {
    return {
      allBranches: this.allBranches,
      api: this.api,
      insecure: this.insecure,
      owner: this.owner,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorGiteaModel;

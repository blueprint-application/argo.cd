import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorAzureDevOpsModel extends BaseModel {
  accessTokenRef?: V1alpha1SecretRef;
  // Scan all branches instead of just the default branch.
  allBranches?: boolean;
  // The URL to Azure DevOps. If blank, use https://dev.azure.com.
  api?: string;
  // Azure Devops organization. Required. E.g. \"my-organization\".
  organization?: string;
  // Azure Devops team project. Required. E.g. \"my-team\".
  teamProject?: string;

  constructor(data: V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions) {
    super();
    validate(data);
    this.accessTokenRef = data.accessTokenRef;
    this.allBranches = data.allBranches;
    this.api = data.api;
    this.organization = data.organization;
    this.teamProject = data.teamProject;
  }

  static create(
    data: V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions,
  ): V1alpha1SCMProviderGeneratorAzureDevOpsModel {
    return new V1alpha1SCMProviderGeneratorAzureDevOpsModel(data);
  }

  toObject(): Partial<this> {
    return {
      accessTokenRef: this.accessTokenRef,
      allBranches: this.allBranches,
      api: this.api,
      organization: this.organization,
      teamProject: this.teamProject,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorAzureDevOpsModel;

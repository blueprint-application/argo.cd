import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorAzureDevOpsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorAzureDevOpsModel extends BaseModel {
  // The Azure DevOps API URL to talk to. If blank, use https://dev.azure.com/.
  api?: string;
  labels?: Array<string>;
  // Azure DevOps org to scan. Required.
  organization?: string;
  // Azure DevOps project name to scan. Required.
  project?: string;
  // Azure DevOps repo name to scan. Required.
  repo?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1PullRequestGeneratorAzureDevOpsModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.labels = data.labels;
    this.organization = data.organization;
    this.project = data.project;
    this.repo = data.repo;
    this.tokenRef = data.tokenRef;
  }

  static create(
    data: V1alpha1PullRequestGeneratorAzureDevOpsModelOptions,
  ): V1alpha1PullRequestGeneratorAzureDevOpsModel {
    return new V1alpha1PullRequestGeneratorAzureDevOpsModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      labels: this.labels,
      organization: this.organization,
      project: this.project,
      repo: this.repo,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorAzureDevOpsModel;

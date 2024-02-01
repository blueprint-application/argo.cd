import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorGithubModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorGithubModel extends BaseModel {
  // The GitHub API URL to talk to. If blank, use https://api.github.com/.
  api?: string;
  // AppSecretName is a reference to a GitHub App repo-creds secret with permission to access pull requests.
  appSecretName?: string;
  labels?: Array<string>;
  // GitHub org or user to scan. Required.
  owner?: string;
  // GitHub repo name to scan. Required.
  repo?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1PullRequestGeneratorGithubModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.appSecretName = data.appSecretName;
    this.labels = data.labels;
    this.owner = data.owner;
    this.repo = data.repo;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1PullRequestGeneratorGithubModelOptions): V1alpha1PullRequestGeneratorGithubModel {
    return new V1alpha1PullRequestGeneratorGithubModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      appSecretName: this.appSecretName,
      labels: this.labels,
      owner: this.owner,
      repo: this.repo,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorGithubModel;

import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorGitLabModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorGitLabModel extends BaseModel {
  // The GitLab API URL to talk to. If blank, uses https://gitlab.com/.
  api?: string;
  insecure?: boolean;
  labels?: Array<string>;
  // GitLab project to scan. Required.
  project?: string;
  pullRequestState?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1PullRequestGeneratorGitLabModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.insecure = data.insecure;
    this.labels = data.labels;
    this.project = data.project;
    this.pullRequestState = data.pullRequestState;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1PullRequestGeneratorGitLabModelOptions): V1alpha1PullRequestGeneratorGitLabModel {
    return new V1alpha1PullRequestGeneratorGitLabModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      insecure: this.insecure,
      labels: this.labels,
      project: this.project,
      pullRequestState: this.pullRequestState,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorGitLabModel;

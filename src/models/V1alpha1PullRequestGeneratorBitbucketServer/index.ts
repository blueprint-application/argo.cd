import { V1alpha1BasicAuthBitbucketServerModelOptions as V1alpha1BasicAuthBitbucketServer } from '../V1alpha1BasicAuthBitbucketServer';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorBitbucketServerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorBitbucketServerModel extends BaseModel {
  // The Bitbucket REST API URL to talk to e.g. https://bitbucket.org/rest Required.
  api?: string;
  basicAuth?: V1alpha1BasicAuthBitbucketServer;
  // Project to scan. Required.
  project?: string;
  // Repo name to scan. Required.
  repo?: string;

  constructor(data: V1alpha1PullRequestGeneratorBitbucketServerModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.basicAuth = data.basicAuth;
    this.project = data.project;
    this.repo = data.repo;
  }

  static create(
    data: V1alpha1PullRequestGeneratorBitbucketServerModelOptions,
  ): V1alpha1PullRequestGeneratorBitbucketServerModel {
    return new V1alpha1PullRequestGeneratorBitbucketServerModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      basicAuth: this.basicAuth,
      project: this.project,
      repo: this.repo,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorBitbucketServerModel;

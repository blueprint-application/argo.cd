import { V1alpha1BasicAuthBitbucketServerModelOptions as V1alpha1BasicAuthBitbucketServer } from '../V1alpha1BasicAuthBitbucketServer';
import { V1alpha1BearerTokenBitbucketCloudModelOptions as V1alpha1BearerTokenBitbucketCloud } from '../V1alpha1BearerTokenBitbucketCloud';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorBitbucketModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorBitbucketModel extends BaseModel {
  // The Bitbucket REST API URL to talk to. If blank, uses https://api.bitbucket.org/2.0.
  api?: string;
  basicAuth?: V1alpha1BasicAuthBitbucketServer;
  bearerToken?: V1alpha1BearerTokenBitbucketCloud;
  // Workspace to scan. Required.
  owner?: string;
  // Repo name to scan. Required.
  repo?: string;

  constructor(data: V1alpha1PullRequestGeneratorBitbucketModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.basicAuth = data.basicAuth;
    this.bearerToken = data.bearerToken;
    this.owner = data.owner;
    this.repo = data.repo;
  }

  static create(data: V1alpha1PullRequestGeneratorBitbucketModelOptions): V1alpha1PullRequestGeneratorBitbucketModel {
    return new V1alpha1PullRequestGeneratorBitbucketModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      basicAuth: this.basicAuth,
      bearerToken: this.bearerToken,
      owner: this.owner,
      repo: this.repo,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorBitbucketModel;

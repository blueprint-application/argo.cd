import { V1alpha1SecretRefModelOptions as V1alpha1SecretRef } from '../V1alpha1SecretRef';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorGiteaModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorGiteaModel extends BaseModel {
  api?: string;
  // Allow insecure tls, for self-signed certificates; default: false.
  insecure?: boolean;
  // Gitea org or user to scan. Required.
  owner?: string;
  // Gitea repo name to scan. Required.
  repo?: string;
  tokenRef?: V1alpha1SecretRef;

  constructor(data: V1alpha1PullRequestGeneratorGiteaModelOptions) {
    super();
    validate(data);
    this.api = data.api;
    this.insecure = data.insecure;
    this.owner = data.owner;
    this.repo = data.repo;
    this.tokenRef = data.tokenRef;
  }

  static create(data: V1alpha1PullRequestGeneratorGiteaModelOptions): V1alpha1PullRequestGeneratorGiteaModel {
    return new V1alpha1PullRequestGeneratorGiteaModel(data);
  }

  toObject(): Partial<this> {
    return {
      api: this.api,
      insecure: this.insecure,
      owner: this.owner,
      repo: this.repo,
      tokenRef: this.tokenRef,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorGiteaModel;

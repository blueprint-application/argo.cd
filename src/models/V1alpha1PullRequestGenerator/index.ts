import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1PullRequestGeneratorAzureDevOpsModelOptions as V1alpha1PullRequestGeneratorAzureDevOps } from '../V1alpha1PullRequestGeneratorAzureDevOps';
import { V1alpha1PullRequestGeneratorBitbucketModelOptions as V1alpha1PullRequestGeneratorBitbucket } from '../V1alpha1PullRequestGeneratorBitbucket';
import { V1alpha1PullRequestGeneratorBitbucketServerModelOptions as V1alpha1PullRequestGeneratorBitbucketServer } from '../V1alpha1PullRequestGeneratorBitbucketServer';
import { V1alpha1PullRequestGeneratorFilterModelOptions as V1alpha1PullRequestGeneratorFilter } from '../V1alpha1PullRequestGeneratorFilter';
import { V1alpha1PullRequestGeneratorGitLabModelOptions as V1alpha1PullRequestGeneratorGitLab } from '../V1alpha1PullRequestGeneratorGitLab';
import { V1alpha1PullRequestGeneratorGiteaModelOptions as V1alpha1PullRequestGeneratorGitea } from '../V1alpha1PullRequestGeneratorGitea';
import { V1alpha1PullRequestGeneratorGithubModelOptions as V1alpha1PullRequestGeneratorGithub } from '../V1alpha1PullRequestGeneratorGithub';
import { BaseModel } from '../types';
import type { V1alpha1PullRequestGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1PullRequestGeneratorModel extends BaseModel {
  azuredevops?: V1alpha1PullRequestGeneratorAzureDevOps;
  bitbucket?: V1alpha1PullRequestGeneratorBitbucket;
  bitbucketServer?: V1alpha1PullRequestGeneratorBitbucketServer;
  // Filters for which pull requests should be considered.
  filters?: Array<V1alpha1PullRequestGeneratorFilter>;
  gitea?: V1alpha1PullRequestGeneratorGitea;
  github?: V1alpha1PullRequestGeneratorGithub;
  gitlab?: V1alpha1PullRequestGeneratorGitLab;
  // Standard parameters.
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;

  constructor(data: V1alpha1PullRequestGeneratorModelOptions) {
    super();
    validate(data);
    this.azuredevops = data.azuredevops;
    this.bitbucket = data.bitbucket;
    this.bitbucketServer = data.bitbucketServer;
    this.filters = data.filters;
    this.gitea = data.gitea;
    this.github = data.github;
    this.gitlab = data.gitlab;
    this.requeueAfterSeconds = data.requeueAfterSeconds;
    this.template = data.template;
  }

  static create(data: V1alpha1PullRequestGeneratorModelOptions): V1alpha1PullRequestGeneratorModel {
    return new V1alpha1PullRequestGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      azuredevops: this.azuredevops,
      bitbucket: this.bitbucket,
      bitbucketServer: this.bitbucketServer,
      filters: this.filters,
      gitea: this.gitea,
      github: this.github,
      gitlab: this.gitlab,
      requeueAfterSeconds: this.requeueAfterSeconds,
      template: this.template,
    } as Partial<this>;
  }
}

export default V1alpha1PullRequestGeneratorModel;

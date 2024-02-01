import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions as V1alpha1SCMProviderGeneratorAWSCodeCommit } from '../V1alpha1SCMProviderGeneratorAWSCodeCommit';
import { V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions as V1alpha1SCMProviderGeneratorAzureDevOps } from '../V1alpha1SCMProviderGeneratorAzureDevOps';
import { V1alpha1SCMProviderGeneratorBitbucketModelOptions as V1alpha1SCMProviderGeneratorBitbucket } from '../V1alpha1SCMProviderGeneratorBitbucket';
import { V1alpha1SCMProviderGeneratorBitbucketServerModelOptions as V1alpha1SCMProviderGeneratorBitbucketServer } from '../V1alpha1SCMProviderGeneratorBitbucketServer';
import { V1alpha1SCMProviderGeneratorFilterModelOptions as V1alpha1SCMProviderGeneratorFilter } from '../V1alpha1SCMProviderGeneratorFilter';
import { V1alpha1SCMProviderGeneratorGiteaModelOptions as V1alpha1SCMProviderGeneratorGitea } from '../V1alpha1SCMProviderGeneratorGitea';
import { V1alpha1SCMProviderGeneratorGithubModelOptions as V1alpha1SCMProviderGeneratorGithub } from '../V1alpha1SCMProviderGeneratorGithub';
import { V1alpha1SCMProviderGeneratorGitlabModelOptions as V1alpha1SCMProviderGeneratorGitlab } from '../V1alpha1SCMProviderGeneratorGitlab';
import { BaseModel } from '../types';
import type { V1alpha1SCMProviderGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1SCMProviderGeneratorModel extends BaseModel {
  awsCodeCommit?: V1alpha1SCMProviderGeneratorAWSCodeCommit;
  azureDevOps?: V1alpha1SCMProviderGeneratorAzureDevOps;
  bitbucket?: V1alpha1SCMProviderGeneratorBitbucket;
  bitbucketServer?: V1alpha1SCMProviderGeneratorBitbucketServer;
  // Which protocol to use for the SCM URL. Default is provider-specific but ssh if possible. Not all providers necessarily support all protocols.
  cloneProtocol?: string;
  // Filters for which repos should be considered.
  filters?: Array<V1alpha1SCMProviderGeneratorFilter>;
  gitea?: V1alpha1SCMProviderGeneratorGitea;
  github?: V1alpha1SCMProviderGeneratorGithub;
  gitlab?: V1alpha1SCMProviderGeneratorGitlab;
  // Standard parameters.
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };

  constructor(data: V1alpha1SCMProviderGeneratorModelOptions) {
    super();
    validate(data);
    this.awsCodeCommit = data.awsCodeCommit;
    this.azureDevOps = data.azureDevOps;
    this.bitbucket = data.bitbucket;
    this.bitbucketServer = data.bitbucketServer;
    this.cloneProtocol = data.cloneProtocol;
    this.filters = data.filters;
    this.gitea = data.gitea;
    this.github = data.github;
    this.gitlab = data.gitlab;
    this.requeueAfterSeconds = data.requeueAfterSeconds;
    this.template = data.template;
    this.values = data.values;
  }

  static create(data: V1alpha1SCMProviderGeneratorModelOptions): V1alpha1SCMProviderGeneratorModel {
    return new V1alpha1SCMProviderGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      awsCodeCommit: this.awsCodeCommit,
      azureDevOps: this.azureDevOps,
      bitbucket: this.bitbucket,
      bitbucketServer: this.bitbucketServer,
      cloneProtocol: this.cloneProtocol,
      filters: this.filters,
      gitea: this.gitea,
      github: this.github,
      gitlab: this.gitlab,
      requeueAfterSeconds: this.requeueAfterSeconds,
      template: this.template,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1SCMProviderGeneratorModel;

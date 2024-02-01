import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1PullRequestGeneratorAzureDevOpsModelOptions as V1alpha1PullRequestGeneratorAzureDevOps } from '../V1alpha1PullRequestGeneratorAzureDevOps';
import { V1alpha1PullRequestGeneratorBitbucketModelOptions as V1alpha1PullRequestGeneratorBitbucket } from '../V1alpha1PullRequestGeneratorBitbucket';
import { V1alpha1PullRequestGeneratorBitbucketServerModelOptions as V1alpha1PullRequestGeneratorBitbucketServer } from '../V1alpha1PullRequestGeneratorBitbucketServer';
import { V1alpha1PullRequestGeneratorFilterModelOptions as V1alpha1PullRequestGeneratorFilter } from '../V1alpha1PullRequestGeneratorFilter';
import { V1alpha1PullRequestGeneratorGitLabModelOptions as V1alpha1PullRequestGeneratorGitLab } from '../V1alpha1PullRequestGeneratorGitLab';
import { V1alpha1PullRequestGeneratorGiteaModelOptions as V1alpha1PullRequestGeneratorGitea } from '../V1alpha1PullRequestGeneratorGitea';
import { V1alpha1PullRequestGeneratorGithubModelOptions as V1alpha1PullRequestGeneratorGithub } from '../V1alpha1PullRequestGeneratorGithub';

export interface V1alpha1PullRequestGeneratorModelOptions {
  azuredevops?: V1alpha1PullRequestGeneratorAzureDevOps;
  bitbucket?: V1alpha1PullRequestGeneratorBitbucket;
  bitbucketServer?: V1alpha1PullRequestGeneratorBitbucketServer;
  filters?: Array<V1alpha1PullRequestGeneratorFilter>;
  gitea?: V1alpha1PullRequestGeneratorGitea;
  github?: V1alpha1PullRequestGeneratorGithub;
  gitlab?: V1alpha1PullRequestGeneratorGitLab;
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
}

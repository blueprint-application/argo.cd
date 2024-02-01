import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1SCMProviderGeneratorAWSCodeCommitModelOptions as V1alpha1SCMProviderGeneratorAWSCodeCommit } from '../V1alpha1SCMProviderGeneratorAWSCodeCommit';
import { V1alpha1SCMProviderGeneratorAzureDevOpsModelOptions as V1alpha1SCMProviderGeneratorAzureDevOps } from '../V1alpha1SCMProviderGeneratorAzureDevOps';
import { V1alpha1SCMProviderGeneratorBitbucketModelOptions as V1alpha1SCMProviderGeneratorBitbucket } from '../V1alpha1SCMProviderGeneratorBitbucket';
import { V1alpha1SCMProviderGeneratorBitbucketServerModelOptions as V1alpha1SCMProviderGeneratorBitbucketServer } from '../V1alpha1SCMProviderGeneratorBitbucketServer';
import { V1alpha1SCMProviderGeneratorFilterModelOptions as V1alpha1SCMProviderGeneratorFilter } from '../V1alpha1SCMProviderGeneratorFilter';
import { V1alpha1SCMProviderGeneratorGiteaModelOptions as V1alpha1SCMProviderGeneratorGitea } from '../V1alpha1SCMProviderGeneratorGitea';
import { V1alpha1SCMProviderGeneratorGithubModelOptions as V1alpha1SCMProviderGeneratorGithub } from '../V1alpha1SCMProviderGeneratorGithub';
import { V1alpha1SCMProviderGeneratorGitlabModelOptions as V1alpha1SCMProviderGeneratorGitlab } from '../V1alpha1SCMProviderGeneratorGitlab';

export interface V1alpha1SCMProviderGeneratorModelOptions {
  awsCodeCommit?: V1alpha1SCMProviderGeneratorAWSCodeCommit;
  azureDevOps?: V1alpha1SCMProviderGeneratorAzureDevOps;
  bitbucket?: V1alpha1SCMProviderGeneratorBitbucket;
  bitbucketServer?: V1alpha1SCMProviderGeneratorBitbucketServer;
  cloneProtocol?: string;
  filters?: Array<V1alpha1SCMProviderGeneratorFilter>;
  gitea?: V1alpha1SCMProviderGeneratorGitea;
  github?: V1alpha1SCMProviderGeneratorGithub;
  gitlab?: V1alpha1SCMProviderGeneratorGitlab;
  requeueAfterSeconds?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };
}

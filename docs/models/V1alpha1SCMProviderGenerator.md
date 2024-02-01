# V1alpha1SCMProviderGeneratorModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsCodeCommit** | [**V1alpha1SCMProviderGeneratorAWSCodeCommit**](V1alpha1SCMProviderGeneratorAWSCodeCommit.md) |  | [optional] [default to undefined]
**azureDevOps** | [**V1alpha1SCMProviderGeneratorAzureDevOps**](V1alpha1SCMProviderGeneratorAzureDevOps.md) |  | [optional] [default to undefined]
**bitbucket** | [**V1alpha1SCMProviderGeneratorBitbucket**](V1alpha1SCMProviderGeneratorBitbucket.md) |  | [optional] [default to undefined]
**bitbucketServer** | [**V1alpha1SCMProviderGeneratorBitbucketServer**](V1alpha1SCMProviderGeneratorBitbucketServer.md) |  | [optional] [default to undefined]
**cloneProtocol** | **string** | Which protocol to use for the SCM URL. Default is provider-specific but ssh if possible. Not all providers necessarily support all protocols. | [optional] [default to undefined]
**filters** | [**Array&lt;V1alpha1SCMProviderGeneratorFilter&gt;**](V1alpha1SCMProviderGeneratorFilter.md) | Filters for which repos should be considered. | [optional] [default to undefined]
**gitea** | [**V1alpha1SCMProviderGeneratorGitea**](V1alpha1SCMProviderGeneratorGitea.md) |  | [optional] [default to undefined]
**github** | [**V1alpha1SCMProviderGeneratorGithub**](V1alpha1SCMProviderGeneratorGithub.md) |  | [optional] [default to undefined]
**gitlab** | [**V1alpha1SCMProviderGeneratorGitlab**](V1alpha1SCMProviderGeneratorGitlab.md) |  | [optional] [default to undefined]
**requeueAfterSeconds** | **string** | Standard parameters. | [optional] [default to undefined]
**template** | [**V1alpha1ApplicationSetTemplate**](V1alpha1ApplicationSetTemplate.md) |  | [optional] [default to undefined]
**values** | **{ [key: string]: string; }** |  | [optional] [default to undefined]



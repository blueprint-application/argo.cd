# V1alpha1SCMProviderGeneratorAWSCodeCommitModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allBranches** | **boolean** | Scan all branches instead of just the default branch. | [optional] [default to undefined]
**region** | **string** | Region provides the AWS region to discover repos. if not provided, AppSet controller will infer the current region from environment. | [optional] [default to undefined]
**role** | **string** | Role provides the AWS IAM role to assume, for cross-account repo discovery if not provided, AppSet controller will use its pod/node identity to discover. | [optional] [default to undefined]
**tagFilters** | [**Array&lt;V1alpha1TagFilter&gt;**](V1alpha1TagFilter.md) |  | [optional] [default to undefined]



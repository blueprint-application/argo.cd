# V1alpha1SCMProviderGeneratorAzureDevOpsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessTokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]
**allBranches** | **boolean** | Scan all branches instead of just the default branch. | [optional] [default to undefined]
**api** | **string** | The URL to Azure DevOps. If blank, use https://dev.azure.com. | [optional] [default to undefined]
**organization** | **string** | Azure Devops organization. Required. E.g. \&quot;my-organization\&quot;. | [optional] [default to undefined]
**teamProject** | **string** | Azure Devops team project. Required. E.g. \&quot;my-team\&quot;. | [optional] [default to undefined]



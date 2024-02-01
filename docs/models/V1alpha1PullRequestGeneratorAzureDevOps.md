# V1alpha1PullRequestGeneratorAzureDevOpsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **string** | The Azure DevOps API URL to talk to. If blank, use https://dev.azure.com/. | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**organization** | **string** | Azure DevOps org to scan. Required. | [optional] [default to undefined]
**project** | **string** | Azure DevOps project name to scan. Required. | [optional] [default to undefined]
**repo** | **string** | Azure DevOps repo name to scan. Required. | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



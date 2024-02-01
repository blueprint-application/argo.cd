# V1alpha1SCMProviderGeneratorGithubModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allBranches** | **boolean** | Scan all branches instead of just the default branch. | [optional] [default to undefined]
**api** | **string** | The GitHub API URL to talk to. If blank, use https://api.github.com/. | [optional] [default to undefined]
**appSecretName** | **string** | AppSecretName is a reference to a GitHub App repo-creds secret. | [optional] [default to undefined]
**organization** | **string** | GitHub org to scan. Required. | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



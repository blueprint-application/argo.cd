# V1alpha1SCMProviderGeneratorGitlabModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allBranches** | **boolean** | Scan all branches instead of just the default branch. | [optional] [default to undefined]
**api** | **string** | The Gitlab API URL to talk to. | [optional] [default to undefined]
**group** | **string** | Gitlab group to scan. Required.  You can use either the project id (recommended) or the full namespaced path. | [optional] [default to undefined]
**includeSubgroups** | **boolean** |  | [optional] [default to undefined]
**insecure** | **boolean** |  | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



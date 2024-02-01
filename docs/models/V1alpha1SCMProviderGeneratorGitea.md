# V1alpha1SCMProviderGeneratorGiteaModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allBranches** | **boolean** | Scan all branches instead of just the default branch. | [optional] [default to undefined]
**api** | **string** | The Gitea URL to talk to. For example https://gitea.mydomain.com/. | [optional] [default to undefined]
**insecure** | **boolean** |  | [optional] [default to undefined]
**owner** | **string** | Gitea organization or user to scan. Required. | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



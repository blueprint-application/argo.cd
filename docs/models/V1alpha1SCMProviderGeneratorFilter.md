# V1alpha1SCMProviderGeneratorFilterModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branchMatch** | **string** | A regex which must match the branch name. | [optional] [default to undefined]
**labelMatch** | **string** | A regex which must match at least one label. | [optional] [default to undefined]
**pathsDoNotExist** | **Array&lt;string&gt;** | An array of paths, all of which must not exist. | [optional] [default to undefined]
**pathsExist** | **Array&lt;string&gt;** | An array of paths, all of which must exist. | [optional] [default to undefined]
**repositoryMatch** | **string** | A regex for repo names. | [optional] [default to undefined]



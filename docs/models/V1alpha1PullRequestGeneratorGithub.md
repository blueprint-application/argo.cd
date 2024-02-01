# V1alpha1PullRequestGeneratorGithubModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **string** | The GitHub API URL to talk to. If blank, use https://api.github.com/. | [optional] [default to undefined]
**appSecretName** | **string** | AppSecretName is a reference to a GitHub App repo-creds secret with permission to access pull requests. | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**owner** | **string** | GitHub org or user to scan. Required. | [optional] [default to undefined]
**repo** | **string** | GitHub repo name to scan. Required. | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



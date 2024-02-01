# V1alpha1PullRequestGeneratorGitLabModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **string** | The GitLab API URL to talk to. If blank, uses https://gitlab.com/. | [optional] [default to undefined]
**insecure** | **boolean** |  | [optional] [default to undefined]
**labels** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**project** | **string** | GitLab project to scan. Required. | [optional] [default to undefined]
**pullRequestState** | **string** |  | [optional] [default to undefined]
**tokenRef** | [**V1alpha1SecretRef**](V1alpha1SecretRef.md) |  | [optional] [default to undefined]



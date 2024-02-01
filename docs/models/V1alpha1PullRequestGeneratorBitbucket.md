# V1alpha1PullRequestGeneratorBitbucketModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api** | **string** | The Bitbucket REST API URL to talk to. If blank, uses https://api.bitbucket.org/2.0. | [optional] [default to undefined]
**basicAuth** | [**V1alpha1BasicAuthBitbucketServer**](V1alpha1BasicAuthBitbucketServer.md) |  | [optional] [default to undefined]
**bearerToken** | [**V1alpha1BearerTokenBitbucketCloud**](V1alpha1BearerTokenBitbucketCloud.md) |  | [optional] [default to undefined]
**owner** | **string** | Workspace to scan. Required. | [optional] [default to undefined]
**repo** | **string** | Repo name to scan. Required. | [optional] [default to undefined]



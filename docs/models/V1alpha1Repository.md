# V1alpha1RepositoryModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectionState** | [**V1alpha1ConnectionState**](V1alpha1ConnectionState.md) |  | [optional] [default to undefined]
**enableLfs** | **boolean** | EnableLFS specifies whether git-lfs support should be enabled for this repo. Only valid for Git repositories. | [optional] [default to undefined]
**enableOCI** | **boolean** |  | [optional] [default to undefined]
**forceHttpBasicAuth** | **boolean** |  | [optional] [default to undefined]
**gcpServiceAccountKey** | **string** |  | [optional] [default to undefined]
**githubAppEnterpriseBaseUrl** | **string** |  | [optional] [default to undefined]
**githubAppID** | **string** |  | [optional] [default to undefined]
**githubAppInstallationID** | **string** |  | [optional] [default to undefined]
**githubAppPrivateKey** | **string** |  | [optional] [default to undefined]
**inheritedCreds** | **boolean** |  | [optional] [default to undefined]
**insecure** | **boolean** |  | [optional] [default to undefined]
**insecureIgnoreHostKey** | **boolean** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**proxy** | **string** |  | [optional] [default to undefined]
**repo** | **string** |  | [optional] [default to undefined]
**sshPrivateKey** | **string** | SSHPrivateKey contains the PEM data for authenticating at the repo server. Only used with Git repos. | [optional] [default to undefined]
**tlsClientCertData** | **string** |  | [optional] [default to undefined]
**tlsClientCertKey** | **string** |  | [optional] [default to undefined]
**type** | **string** | Type specifies the type of the repo. Can be either \&quot;git\&quot; or \&quot;helm. \&quot;git\&quot; is assumed if empty or absent. | [optional] [default to undefined]
**username** | **string** |  | [optional] [default to undefined]



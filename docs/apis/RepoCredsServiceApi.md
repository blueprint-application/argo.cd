# RepoCredsServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**repoCredsServiceCreateRepositoryCredentials**](RepoCredsServiceApi.md#repocredsservicecreaterepositorycredentials) | **POST** /api/v1/repocreds | CreateRepositoryCredentials creates a new repository credential set |
| [**repoCredsServiceDeleteRepositoryCredentials**](RepoCredsServiceApi.md#repocredsservicedeleterepositorycredentials) | **DELETE** /api/v1/repocreds/{url} | DeleteRepositoryCredentials deletes a repository credential set from the configuration |
| [**repoCredsServiceListRepositoryCredentials**](RepoCredsServiceApi.md#repocredsservicelistrepositorycredentials) | **GET** /api/v1/repocreds | ListRepositoryCredentials gets a list of all configured repository credential sets |
| [**repoCredsServiceUpdateRepositoryCredentials**](RepoCredsServiceApi.md#repocredsserviceupdaterepositorycredentials) | **PUT** /api/v1/repocreds/{creds.url} | UpdateRepositoryCredentials updates a repository credential set |


## **repoCredsServiceCreateRepositoryCredentials**
> V1alpha1RepoCreds repoCredsServiceCreateRepositoryCredentials(body)


### Example

```typescript
import { SDK, RepoCredsServiceCreateRepositoryCredentialsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepoCreds = await sdk.repoCredsService.repoCredsServiceCreateRepositoryCredentials(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1RepoCreds**| Repository definition |
| **upsert** | [**boolean**] | Whether to create in upsert mode. | (optional) defaults to undefined |


### Return type

**V1alpha1RepoCreds**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](RepoCredsServiceApi.md#repocredsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repoCredsServiceDeleteRepositoryCredentials**
> any repoCredsServiceDeleteRepositoryCredentials()


### Example

```typescript
import { SDK, RepoCredsServiceDeleteRepositoryCredentialsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      url: string, // required
    },
  };
  const result: any = await sdk.repoCredsService.repoCredsServiceDeleteRepositoryCredentials(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **url** | [**string**] |  | defaults to undefined |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](RepoCredsServiceApi.md#repocredsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repoCredsServiceListRepositoryCredentials**
> V1alpha1RepoCredsList repoCredsServiceListRepositoryCredentials()


### Example

```typescript
import { SDK, RepoCredsServiceListRepositoryCredentialsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepoCredsList = await sdk.repoCredsService.repoCredsServiceListRepositoryCredentials(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **url** | [**string**] | Repo URL for query. | (optional) defaults to undefined |


### Return type

**V1alpha1RepoCredsList**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](RepoCredsServiceApi.md#repocredsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repoCredsServiceUpdateRepositoryCredentials**
> V1alpha1RepoCreds repoCredsServiceUpdateRepositoryCredentials(body)


### Example

```typescript
import { SDK, RepoCredsServiceUpdateRepositoryCredentialsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      creds.url: string, // required
    },
    data: {
    enableOCI: true,
    forceHttpBasicAuth: true,
    gcpServiceAccountKey: "gcpServiceAccountKey_example",
    githubAppEnterpriseBaseUrl: "githubAppEnterpriseBaseUrl_example",
    githubAppID: "githubAppID_example",
    githubAppInstallationID: "githubAppInstallationID_example",
    githubAppPrivateKey: "githubAppPrivateKey_example",
    password: "password_example",
    proxy: "proxy_example",
    sshPrivateKey: "sshPrivateKey_example",
    tlsClientCertData: "tlsClientCertData_example",
    tlsClientCertKey: "tlsClientCertKey_example",
    type: "type_example",
    url: "url_example",
    username: "username_example",
  },
  };
  const result: V1alpha1RepoCreds = await sdk.repoCredsService.repoCredsServiceUpdateRepositoryCredentials(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1RepoCreds**|  |
| **credsUrl** | [**string**] | URL is the URL that this credentials matches to | defaults to undefined |


### Return type

**V1alpha1RepoCreds**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response. |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](RepoCredsServiceApi.md#repocredsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



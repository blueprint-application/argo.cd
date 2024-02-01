# RepositoryServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**repositoryServiceCreateRepository**](RepositoryServiceApi.md#repositoryservicecreaterepository) | **POST** /api/v1/repositories | CreateRepository creates a new repository configuration |
| [**repositoryServiceDeleteRepository**](RepositoryServiceApi.md#repositoryservicedeleterepository) | **DELETE** /api/v1/repositories/{repo} | DeleteRepository deletes a repository from the configuration |
| [**repositoryServiceGet**](RepositoryServiceApi.md#repositoryserviceget) | **GET** /api/v1/repositories/{repo} | Get returns a repository or its credentials |
| [**repositoryServiceGetAppDetails**](RepositoryServiceApi.md#repositoryservicegetappdetails) | **POST** /api/v1/repositories/{source.repoURL}/appdetails | GetAppDetails returns application details by given path |
| [**repositoryServiceGetHelmCharts**](RepositoryServiceApi.md#repositoryservicegethelmcharts) | **GET** /api/v1/repositories/{repo}/helmcharts | GetHelmCharts returns list of helm charts in the specified repository |
| [**repositoryServiceListApps**](RepositoryServiceApi.md#repositoryservicelistapps) | **GET** /api/v1/repositories/{repo}/apps | ListApps returns list of apps in the repo |
| [**repositoryServiceListRefs**](RepositoryServiceApi.md#repositoryservicelistrefs) | **GET** /api/v1/repositories/{repo}/refs |  |
| [**repositoryServiceListRepositories**](RepositoryServiceApi.md#repositoryservicelistrepositories) | **GET** /api/v1/repositories | ListRepositories gets a list of all configured repositories |
| [**repositoryServiceUpdateRepository**](RepositoryServiceApi.md#repositoryserviceupdaterepository) | **PUT** /api/v1/repositories/{repo.repo} | UpdateRepository updates a repository configuration |
| [**repositoryServiceValidateAccess**](RepositoryServiceApi.md#repositoryservicevalidateaccess) | **POST** /api/v1/repositories/{repo}/validate | ValidateAccess validates access to a repository with given parameters |


## **repositoryServiceCreateRepository**
> V1alpha1Repository repositoryServiceCreateRepository(body)


### Example

```typescript
import { SDK, RepositoryServiceCreateRepositoryParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1Repository = await sdk.repositoryService.repositoryServiceCreateRepository(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Repository**| Repository definition |
| **upsert** | [**boolean**] | Whether to create in upsert mode. | (optional) defaults to undefined |
| **credsOnly** | [**boolean**] | Whether to operate on credential set instead of repository. | (optional) defaults to undefined |


### Return type

**V1alpha1Repository**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceDeleteRepository**
> any repositoryServiceDeleteRepository()


### Example

```typescript
import { SDK, RepositoryServiceDeleteRepositoryParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
  };
  const result: any = await sdk.repositoryService.repositoryServiceDeleteRepository(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] | Repo URL for query | defaults to undefined |
| **forceRefresh** | [**boolean**] | Whether to force a cache refresh on repo\&#39;s connection state. | (optional) defaults to undefined |


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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceGet**
> V1alpha1Repository repositoryServiceGet()


### Example

```typescript
import { SDK, RepositoryServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
  };
  const result: V1alpha1Repository = await sdk.repositoryService.repositoryServiceGet(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] | Repo URL for query | defaults to undefined |
| **forceRefresh** | [**boolean**] | Whether to force a cache refresh on repo\&#39;s connection state. | (optional) defaults to undefined |


### Return type

**V1alpha1Repository**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceGetAppDetails**
> RepositoryRepoAppDetailsResponse repositoryServiceGetAppDetails(body)


### Example

```typescript
import { SDK, RepositoryServiceGetAppDetailsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      source.repoURL: string, // required
    },
    data: {
    appName: "appName_example",
    appProject: "appProject_example",
    source: {
      chart: "chart_example",
      directory: {
        exclude: "exclude_example",
        include: "include_example",
        jsonnet: {
          extVars: [
            {
              code: true,
              name: "name_example",
              value: "value_example",
            },
          ],
          libs: [
            "libs_example",
          ],
          tlas: [
            {
              code: true,
              name: "name_example",
              value: "value_example",
            },
          ],
        },
        recurse: true,
      },
      helm: {
        fileParameters: [
          {
            name: "name_example",
            path: "path_example",
          },
        ],
        ignoreMissingValueFiles: true,
        parameters: [
          {
            forceString: true,
            name: "name_example",
            value: "value_example",
          },
        ],
        passCredentials: true,
        releaseName: "releaseName_example",
        skipCrds: true,
        valueFiles: [
          "valueFiles_example",
        ],
        values: "values_example",
        valuesObject: {
          raw: 'YQ==',
        },
        version: "version_example",
      },
      kustomize: {
        commonAnnotations: {
          "key": "key_example",
        },
        commonAnnotationsEnvsubst: true,
        commonLabels: {
          "key": "key_example",
        },
        forceCommonAnnotations: true,
        forceCommonLabels: true,
        images: [
          "images_example",
        ],
        namePrefix: "namePrefix_example",
        nameSuffix: "nameSuffix_example",
        namespace: "namespace_example",
        replicas: [
          {
            count: {
              intVal: 1,
              strVal: "strVal_example",
              type: "type_example",
            },
            name: "name_example",
          },
        ],
        version: "version_example",
      },
      path: "path_example",
      plugin: {
        env: [
          {
            name: "name_example",
            value: "value_example",
          },
        ],
        name: "name_example",
        parameters: [
          {
            array: [
              "array_example",
            ],
            map: {
              "key": "key_example",
            },
            name: "name_example",
            string: "string_example",
          },
        ],
      },
      ref: "ref_example",
      repoURL: "repoURL_example",
      targetRevision: "targetRevision_example",
    },
  },
  };
  const result: RepositoryRepoAppDetailsResponse = await sdk.repositoryService.repositoryServiceGetAppDetails(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **RepositoryRepoAppDetailsQuery**|  |
| **sourceRepoURL** | [**string**] | RepoURL is the URL to the repository (Git or Helm) that contains the application manifests | defaults to undefined |


### Return type

**RepositoryRepoAppDetailsResponse**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceGetHelmCharts**
> RepositoryHelmChartsResponse repositoryServiceGetHelmCharts()


### Example

```typescript
import { SDK, RepositoryServiceGetHelmChartsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
  };
  const result: RepositoryHelmChartsResponse = await sdk.repositoryService.repositoryServiceGetHelmCharts(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] | Repo URL for query | defaults to undefined |
| **forceRefresh** | [**boolean**] | Whether to force a cache refresh on repo\&#39;s connection state. | (optional) defaults to undefined |


### Return type

**RepositoryHelmChartsResponse**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceListApps**
> RepositoryRepoAppsResponse repositoryServiceListApps()


### Example

```typescript
import { SDK, RepositoryServiceListAppsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
  };
  const result: RepositoryRepoAppsResponse = await sdk.repositoryService.repositoryServiceListApps(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] |  | defaults to undefined |
| **revision** | [**string**] |  | (optional) defaults to undefined |
| **appName** | [**string**] |  | (optional) defaults to undefined |
| **appProject** | [**string**] |  | (optional) defaults to undefined |


### Return type

**RepositoryRepoAppsResponse**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceListRefs**
> RepositoryRefs repositoryServiceListRefs()


### Example

```typescript
import { SDK, RepositoryServiceListRefsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
  };
  const result: RepositoryRefs = await sdk.repositoryService.repositoryServiceListRefs(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] | Repo URL for query | defaults to undefined |
| **forceRefresh** | [**boolean**] | Whether to force a cache refresh on repo\&#39;s connection state. | (optional) defaults to undefined |


### Return type

**RepositoryRefs**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceListRepositories**
> V1alpha1RepositoryList repositoryServiceListRepositories()


### Example

```typescript
import { SDK, RepositoryServiceListRepositoriesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepositoryList = await sdk.repositoryService.repositoryServiceListRepositories(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **repo** | [**string**] | Repo URL for query. | (optional) defaults to undefined |
| **forceRefresh** | [**boolean**] | Whether to force a cache refresh on repo\&#39;s connection state. | (optional) defaults to undefined |


### Return type

**V1alpha1RepositoryList**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceUpdateRepository**
> V1alpha1Repository repositoryServiceUpdateRepository(body)


### Example

```typescript
import { SDK, RepositoryServiceUpdateRepositoryParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo.repo: string, // required
    },
    data: {
    connectionState: {
      attemptedAt: new Date('1970-01-01T00:00:00.00Z'),
      message: "message_example",
      status: "status_example",
    },
    enableLfs: true,
    enableOCI: true,
    forceHttpBasicAuth: true,
    gcpServiceAccountKey: "gcpServiceAccountKey_example",
    githubAppEnterpriseBaseUrl: "githubAppEnterpriseBaseUrl_example",
    githubAppID: "githubAppID_example",
    githubAppInstallationID: "githubAppInstallationID_example",
    githubAppPrivateKey: "githubAppPrivateKey_example",
    inheritedCreds: true,
    insecure: true,
    insecureIgnoreHostKey: true,
    name: "name_example",
    password: "password_example",
    project: "project_example",
    proxy: "proxy_example",
    repo: "repo_example",
    sshPrivateKey: "sshPrivateKey_example",
    tlsClientCertData: "tlsClientCertData_example",
    tlsClientCertKey: "tlsClientCertKey_example",
    type: "type_example",
    username: "username_example",
  },
  };
  const result: V1alpha1Repository = await sdk.repositoryService.repositoryServiceUpdateRepository(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Repository**|  |
| **repoRepo** | [**string**] | Repo contains the URL to the remote repository | defaults to undefined |


### Return type

**V1alpha1Repository**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **repositoryServiceValidateAccess**
> any repositoryServiceValidateAccess(body)


### Example

```typescript
import { SDK, RepositoryServiceValidateAccessParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      repo: string, // required
    },
    data: "body_example",
  };
  const result: any = await sdk.repositoryService.repositoryServiceValidateAccess(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **string**| The URL to the repo |
| **repo** | [**string**] | The URL to the repo | defaults to undefined |
| **username** | [**string**] | Username for accessing repo. | (optional) defaults to undefined |
| **password** | [**string**] | Password for accessing repo. | (optional) defaults to undefined |
| **sshPrivateKey** | [**string**] | Private key data for accessing SSH repository. | (optional) defaults to undefined |
| **insecure** | [**boolean**] | Whether to skip certificate or host key validation. | (optional) defaults to undefined |
| **tlsClientCertData** | [**string**] | TLS client cert data for accessing HTTPS repository. | (optional) defaults to undefined |
| **tlsClientCertKey** | [**string**] | TLS client cert key for accessing HTTPS repository. | (optional) defaults to undefined |
| **type** | [**string**] | The type of the repo. | (optional) defaults to undefined |
| **name** | [**string**] | The name of the repo. | (optional) defaults to undefined |
| **enableOci** | [**boolean**] | Whether helm-oci support should be enabled for this repo. | (optional) defaults to undefined |
| **githubAppPrivateKey** | [**string**] | Github App Private Key PEM data. | (optional) defaults to undefined |
| **githubAppID** | [**string**] | Github App ID of the app used to access the repo. | (optional) defaults to undefined |
| **githubAppInstallationID** | [**string**] | Github App Installation ID of the installed GitHub App. | (optional) defaults to undefined |
| **githubAppEnterpriseBaseUrl** | [**string**] | Github App Enterprise base url if empty will default to https://api.github.com. | (optional) defaults to undefined |
| **proxy** | [**string**] | HTTP/HTTPS proxy to access the repository. | (optional) defaults to undefined |
| **project** | [**string**] | Reference between project and repository that allow you automatically to be added as item inside SourceRepos project entity. | (optional) defaults to undefined |
| **gcpServiceAccountKey** | [**string**] | Google Cloud Platform service account key. | (optional) defaults to undefined |
| **forceHttpBasicAuth** | [**boolean**] | Whether to force HTTP basic auth. | (optional) defaults to undefined |


### Return type

**any**

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

[[Back to top]](RepositoryServiceApi.md#repositoryserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



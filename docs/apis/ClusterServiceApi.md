# ClusterServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**clusterServiceCreate**](ClusterServiceApi.md#clusterservicecreate) | **POST** /api/v1/clusters | Create creates a cluster |
| [**clusterServiceDelete**](ClusterServiceApi.md#clusterservicedelete) | **DELETE** /api/v1/clusters/{id.value} | Delete deletes a cluster |
| [**clusterServiceGet**](ClusterServiceApi.md#clusterserviceget) | **GET** /api/v1/clusters/{id.value} | Get returns a cluster by server address |
| [**clusterServiceInvalidateCache**](ClusterServiceApi.md#clusterserviceinvalidatecache) | **POST** /api/v1/clusters/{id.value}/invalidate-cache | InvalidateCache invalidates cluster cache |
| [**clusterServiceList**](ClusterServiceApi.md#clusterservicelist) | **GET** /api/v1/clusters | List returns list of clusters |
| [**clusterServiceRotateAuth**](ClusterServiceApi.md#clusterservicerotateauth) | **POST** /api/v1/clusters/{id.value}/rotate-auth | RotateAuth rotates the bearer token used for a cluster |
| [**clusterServiceUpdate**](ClusterServiceApi.md#clusterserviceupdate) | **PUT** /api/v1/clusters/{id.value} | Update updates a cluster |


## **clusterServiceCreate**
> V1alpha1Cluster clusterServiceCreate(body)


### Example

```typescript
import { SDK, ClusterServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1Cluster = await sdk.clusterService.clusterServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Cluster**|  |
| **upsert** | [**boolean**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1Cluster**

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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceDelete**
> any clusterServiceDelete()


### Example

```typescript
import { SDK, ClusterServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      id.value: string, // required
    },
  };
  const result: any = await sdk.clusterService.clusterServiceDelete(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name | defaults to undefined |
| **server** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **idType** | [**string**] | type is the type of the specified cluster identifier ( \&quot;server\&quot; - default, \&quot;name\&quot; ). | (optional) defaults to undefined |


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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceGet**
> V1alpha1Cluster clusterServiceGet()


### Example

```typescript
import { SDK, ClusterServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      id.value: string, // required
    },
  };
  const result: V1alpha1Cluster = await sdk.clusterService.clusterServiceGet(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name | defaults to undefined |
| **server** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **idType** | [**string**] | type is the type of the specified cluster identifier ( \&quot;server\&quot; - default, \&quot;name\&quot; ). | (optional) defaults to undefined |


### Return type

**V1alpha1Cluster**

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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceInvalidateCache**
> V1alpha1Cluster clusterServiceInvalidateCache()


### Example

```typescript
import { SDK, ClusterServiceInvalidateCacheParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      id.value: string, // required
    },
  };
  const result: V1alpha1Cluster = await sdk.clusterService.clusterServiceInvalidateCache(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name | defaults to undefined |


### Return type

**V1alpha1Cluster**

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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceList**
> V1alpha1ClusterList clusterServiceList()


### Example

```typescript
import { SDK, ClusterServiceListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1ClusterList = await sdk.clusterService.clusterServiceList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **server** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **idType** | [**string**] | type is the type of the specified cluster identifier ( \&quot;server\&quot; - default, \&quot;name\&quot; ). | (optional) defaults to undefined |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name. | (optional) defaults to undefined |


### Return type

**V1alpha1ClusterList**

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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceRotateAuth**
> any clusterServiceRotateAuth()


### Example

```typescript
import { SDK, ClusterServiceRotateAuthParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      id.value: string, // required
    },
  };
  const result: any = await sdk.clusterService.clusterServiceRotateAuth(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name | defaults to undefined |


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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **clusterServiceUpdate**
> V1alpha1Cluster clusterServiceUpdate(body)


### Example

```typescript
import { SDK, ClusterServiceUpdateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      id.value: string, // required
    },
    data: {
    annotations: {
      "key": "key_example",
    },
    clusterResources: true,
    config: {
      awsAuthConfig: {
        clusterName: "clusterName_example",
        roleARN: "roleARN_example",
      },
      bearerToken: "bearerToken_example",
      execProviderConfig: {
        apiVersion: "apiVersion_example",
        args: [
          "args_example",
        ],
        command: "command_example",
        env: {
          "key": "key_example",
        },
        installHint: "installHint_example",
      },
      password: "password_example",
      tlsClientConfig: {
        caData: 'YQ==',
        certData: 'YQ==',
        insecure: true,
        keyData: 'YQ==',
        serverName: "serverName_example",
      },
      username: "username_example",
    },
    connectionState: {
      attemptedAt: new Date('1970-01-01T00:00:00.00Z'),
      message: "message_example",
      status: "status_example",
    },
    info: {
      apiVersions: [
        "apiVersions_example",
      ],
      applicationsCount: "applicationsCount_example",
      cacheInfo: {
        apisCount: "apisCount_example",
        lastCacheSyncTime: new Date('1970-01-01T00:00:00.00Z'),
        resourcesCount: "resourcesCount_example",
      },
      connectionState: {
        attemptedAt: new Date('1970-01-01T00:00:00.00Z'),
        message: "message_example",
        status: "status_example",
      },
      serverVersion: "serverVersion_example",
    },
    labels: {
      "key": "key_example",
    },
    name: "name_example",
    namespaces: [
      "namespaces_example",
    ],
    project: "project_example",
    refreshRequestedAt: new Date('1970-01-01T00:00:00.00Z'),
    server: "server_example",
    serverVersion: "serverVersion_example",
    shard: "shard_example",
  },
  };
  const result: V1alpha1Cluster = await sdk.clusterService.clusterServiceUpdate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Cluster**|  |
| **idValue** | [**string**] | value holds the cluster server URL or cluster name | defaults to undefined |
| **updatedFields** | **Array&lt;string&gt;** |  | (optional) defaults to undefined |
| **idType** | [**string**] | type is the type of the specified cluster identifier ( \&quot;server\&quot; - default, \&quot;name\&quot; ). | (optional) defaults to undefined |


### Return type

**V1alpha1Cluster**

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

[[Back to top]](ClusterServiceApi.md#clusterserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



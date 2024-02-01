# ApplicationServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**applicationServiceCreate**](ApplicationServiceApi.md#applicationservicecreate) | **POST** /api/v1/applications | Create creates an application |
| [**applicationServiceDelete**](ApplicationServiceApi.md#applicationservicedelete) | **DELETE** /api/v1/applications/{name} | Delete deletes an application |
| [**applicationServiceDeleteResource**](ApplicationServiceApi.md#applicationservicedeleteresource) | **DELETE** /api/v1/applications/{name}/resource | DeleteResource deletes a single application resource |
| [**applicationServiceGet**](ApplicationServiceApi.md#applicationserviceget) | **GET** /api/v1/applications/{name} | Get returns an application by name |
| [**applicationServiceGetApplicationSyncWindows**](ApplicationServiceApi.md#applicationservicegetapplicationsyncwindows) | **GET** /api/v1/applications/{name}/syncwindows | Get returns sync windows of the application |
| [**applicationServiceGetManifests**](ApplicationServiceApi.md#applicationservicegetmanifests) | **GET** /api/v1/applications/{name}/manifests | GetManifests returns application manifests |
| [**applicationServiceGetManifestsWithFiles**](ApplicationServiceApi.md#applicationservicegetmanifestswithfiles) | **POST** /api/v1/applications/manifestsWithFiles | GetManifestsWithFiles returns application manifests using provided files to generate them |
| [**applicationServiceGetResource**](ApplicationServiceApi.md#applicationservicegetresource) | **GET** /api/v1/applications/{name}/resource | GetResource returns single application resource |
| [**applicationServiceList**](ApplicationServiceApi.md#applicationservicelist) | **GET** /api/v1/applications | List returns list of applications |
| [**applicationServiceListLinks**](ApplicationServiceApi.md#applicationservicelistlinks) | **GET** /api/v1/applications/{name}/links | ListLinks returns the list of all application deep links |
| [**applicationServiceListResourceActions**](ApplicationServiceApi.md#applicationservicelistresourceactions) | **GET** /api/v1/applications/{name}/resource/actions | ListResourceActions returns list of resource actions |
| [**applicationServiceListResourceEvents**](ApplicationServiceApi.md#applicationservicelistresourceevents) | **GET** /api/v1/applications/{name}/events | ListResourceEvents returns a list of event resources |
| [**applicationServiceListResourceLinks**](ApplicationServiceApi.md#applicationservicelistresourcelinks) | **GET** /api/v1/applications/{name}/resource/links | ListResourceLinks returns the list of all resource deep links |
| [**applicationServiceManagedResources**](ApplicationServiceApi.md#applicationservicemanagedresources) | **GET** /api/v1/applications/{applicationName}/managed-resources | ManagedResources returns list of managed resources |
| [**applicationServicePatch**](ApplicationServiceApi.md#applicationservicepatch) | **PATCH** /api/v1/applications/{name} | Patch patch an application |
| [**applicationServicePatchResource**](ApplicationServiceApi.md#applicationservicepatchresource) | **POST** /api/v1/applications/{name}/resource | PatchResource patch single application resource |
| [**applicationServicePodLogs**](ApplicationServiceApi.md#applicationservicepodlogs) | **GET** /api/v1/applications/{name}/pods/{podName}/logs | PodLogs returns stream of log entries for the specified pod. Pod |
| [**applicationServicePodLogs2**](ApplicationServiceApi.md#applicationservicepodlogs2) | **GET** /api/v1/applications/{name}/logs | PodLogs returns stream of log entries for the specified pod. Pod |
| [**applicationServiceResourceTree**](ApplicationServiceApi.md#applicationserviceresourcetree) | **GET** /api/v1/applications/{applicationName}/resource-tree | ResourceTree returns resource tree |
| [**applicationServiceRevisionChartDetails**](ApplicationServiceApi.md#applicationservicerevisionchartdetails) | **GET** /api/v1/applications/{name}/revisions/{revision}/chartdetails | Get the chart metadata (description, maintainers, home) for a specific revision of the application |
| [**applicationServiceRevisionMetadata**](ApplicationServiceApi.md#applicationservicerevisionmetadata) | **GET** /api/v1/applications/{name}/revisions/{revision}/metadata | Get the meta-data (author, date, tags, message) for a specific revision of the application |
| [**applicationServiceRollback**](ApplicationServiceApi.md#applicationservicerollback) | **POST** /api/v1/applications/{name}/rollback | Rollback syncs an application to its target state |
| [**applicationServiceRunResourceAction**](ApplicationServiceApi.md#applicationservicerunresourceaction) | **POST** /api/v1/applications/{name}/resource/actions | RunResourceAction run resource action |
| [**applicationServiceSync**](ApplicationServiceApi.md#applicationservicesync) | **POST** /api/v1/applications/{name}/sync | Sync syncs an application to its target state |
| [**applicationServiceTerminateOperation**](ApplicationServiceApi.md#applicationserviceterminateoperation) | **DELETE** /api/v1/applications/{name}/operation | TerminateOperation terminates the currently running operation |
| [**applicationServiceUpdate**](ApplicationServiceApi.md#applicationserviceupdate) | **PUT** /api/v1/applications/{application.metadata.name} | Update updates an application |
| [**applicationServiceUpdateSpec**](ApplicationServiceApi.md#applicationserviceupdatespec) | **PUT** /api/v1/applications/{name}/spec | UpdateSpec updates an application spec |
| [**applicationServiceWatch**](ApplicationServiceApi.md#applicationservicewatch) | **GET** /api/v1/stream/applications | Watch returns stream of application change events |
| [**applicationServiceWatchResourceTree**](ApplicationServiceApi.md#applicationservicewatchresourcetree) | **GET** /api/v1/stream/applications/{applicationName}/resource-tree | Watch returns stream of application resource tree |


## **applicationServiceCreate**
> V1alpha1Application applicationServiceCreate(body)


### Example

```typescript
import { SDK, ApplicationServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Application**|  |
| **upsert** | [**boolean**] |  | (optional) defaults to undefined |
| **validate** | [**boolean**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceDelete**
> any applicationServiceDelete()


### Example

```typescript
import { SDK, ApplicationServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: any = await sdk.applicationService.applicationServiceDelete(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **cascade** | [**boolean**] |  | (optional) defaults to undefined |
| **propagationPolicy** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceDeleteResource**
> any applicationServiceDeleteResource()


### Example

```typescript
import { SDK, ApplicationServiceDeleteResourceParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: any = await sdk.applicationService.applicationServiceDeleteResource(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **force** | [**boolean**] |  | (optional) defaults to undefined |
| **orphan** | [**boolean**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceGet**
> V1alpha1Application applicationServiceGet()


### Example

```typescript
import { SDK, ApplicationServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServiceGet(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the application\&#39;s name | defaults to undefined |
| **refresh** | [**string**] | forces application reconciliation if set to true. | (optional) defaults to undefined |
| **projects** | **Array&lt;string&gt;** | the project names to restrict returned list applications. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | when specified with a watch call, shows changes that occur after that particular version of a resource. | (optional) defaults to undefined |
| **selector** | [**string**] | the selector to restrict returned list to applications only with matched labels. | (optional) defaults to undefined |
| **repo** | [**string**] | the repoURL to restrict returned list applications. | (optional) defaults to undefined |
| **appNamespace** | [**string**] | the application\&#39;s namespace. | (optional) defaults to undefined |
| **project** | **Array&lt;string&gt;** | the project names to restrict returned list applications (legacy name for backwards-compatibility). | (optional) defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceGetApplicationSyncWindows**
> ApplicationApplicationSyncWindowsResponse applicationServiceGetApplicationSyncWindows()


### Example

```typescript
import { SDK, ApplicationServiceGetApplicationSyncWindowsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationApplicationSyncWindowsResponse = await sdk.applicationService.applicationServiceGetApplicationSyncWindows(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationApplicationSyncWindowsResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceGetManifests**
> RepositoryManifestResponse applicationServiceGetManifests()


### Example

```typescript
import { SDK, ApplicationServiceGetManifestsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: RepositoryManifestResponse = await sdk.applicationService.applicationServiceGetManifests(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **revision** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**RepositoryManifestResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceGetManifestsWithFiles**
> RepositoryManifestResponse applicationServiceGetManifestsWithFiles(body)


### Example

```typescript
import { SDK, ApplicationServiceGetManifestsWithFilesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: RepositoryManifestResponse = await sdk.applicationService.applicationServiceGetManifestsWithFiles(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ApplicationApplicationManifestQueryWithFilesWrapper**|  (streaming inputs) |


### Return type

**RepositoryManifestResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceGetResource**
> ApplicationApplicationResourceResponse applicationServiceGetResource()


### Example

```typescript
import { SDK, ApplicationServiceGetResourceParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationApplicationResourceResponse = await sdk.applicationService.applicationServiceGetResource(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationApplicationResourceResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceList**
> V1alpha1ApplicationList applicationServiceList()


### Example

```typescript
import { SDK, ApplicationServiceListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1ApplicationList = await sdk.applicationService.applicationServiceList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the application\&#39;s name. | (optional) defaults to undefined |
| **refresh** | [**string**] | forces application reconciliation if set to true. | (optional) defaults to undefined |
| **projects** | **Array&lt;string&gt;** | the project names to restrict returned list applications. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | when specified with a watch call, shows changes that occur after that particular version of a resource. | (optional) defaults to undefined |
| **selector** | [**string**] | the selector to restrict returned list to applications only with matched labels. | (optional) defaults to undefined |
| **repo** | [**string**] | the repoURL to restrict returned list applications. | (optional) defaults to undefined |
| **appNamespace** | [**string**] | the application\&#39;s namespace. | (optional) defaults to undefined |
| **project** | **Array&lt;string&gt;** | the project names to restrict returned list applications (legacy name for backwards-compatibility). | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationList**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceListLinks**
> ApplicationLinksResponse applicationServiceListLinks()


### Example

```typescript
import { SDK, ApplicationServiceListLinksParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationLinksResponse = await sdk.applicationService.applicationServiceListLinks(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationLinksResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceListResourceActions**
> ApplicationResourceActionsListResponse applicationServiceListResourceActions()


### Example

```typescript
import { SDK, ApplicationServiceListResourceActionsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationResourceActionsListResponse = await sdk.applicationService.applicationServiceListResourceActions(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationResourceActionsListResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceListResourceEvents**
> V1EventList applicationServiceListResourceEvents()


### Example

```typescript
import { SDK, ApplicationServiceListResourceEventsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: V1EventList = await sdk.applicationService.applicationServiceListResourceEvents(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **resourceNamespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **resourceUID** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1EventList**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceListResourceLinks**
> ApplicationLinksResponse applicationServiceListResourceLinks()


### Example

```typescript
import { SDK, ApplicationServiceListResourceLinksParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationLinksResponse = await sdk.applicationService.applicationServiceListResourceLinks(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationLinksResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceManagedResources**
> ApplicationManagedResourcesResponse applicationServiceManagedResources()


### Example

```typescript
import { SDK, ApplicationServiceManagedResourcesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      applicationName: string, // required
    },
  };
  const result: ApplicationManagedResourcesResponse = await sdk.applicationService.applicationServiceManagedResources(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **applicationName** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationManagedResourcesResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServicePatch**
> V1alpha1Application applicationServicePatch(body)


### Example

```typescript
import { SDK, ApplicationServicePatchParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: {
    appNamespace: "appNamespace_example",
    name: "name_example",
    patch: "patch_example",
    patchType: "patchType_example",
    project: "project_example",
  },
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServicePatch(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ApplicationApplicationPatchRequest**|  |
| **name** | [**string**] |  | defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServicePatchResource**
> ApplicationApplicationResourceResponse applicationServicePatchResource(body)


### Example

```typescript
import { SDK, ApplicationServicePatchResourceParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: "body_example",
  };
  const result: ApplicationApplicationResourceResponse = await sdk.applicationService.applicationServicePatchResource(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **string**|  |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **patchType** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**ApplicationApplicationResourceResponse**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServicePodLogs**
> StreamResultOfApplicationLogEntry applicationServicePodLogs()


### Example

```typescript
import { SDK, ApplicationServicePodLogsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      podName: string, // required
    },
  };
  const result: StreamResultOfApplicationLogEntry = await sdk.applicationService.applicationServicePodLogs(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **podName** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **container** | [**string**] |  | (optional) defaults to undefined |
| **sinceSeconds** | [**string**] |  | (optional) defaults to undefined |
| **sinceTimeSeconds** | [**string**] | Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. | (optional) defaults to undefined |
| **sinceTimeNanos** | [**number**] | Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context. | (optional) defaults to undefined |
| **tailLines** | [**string**] |  | (optional) defaults to undefined |
| **follow** | [**boolean**] |  | (optional) defaults to undefined |
| **untilTime** | [**string**] |  | (optional) defaults to undefined |
| **filter** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **previous** | [**boolean**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**StreamResultOfApplicationLogEntry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response.(streaming responses) |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServicePodLogs2**
> StreamResultOfApplicationLogEntry applicationServicePodLogs2()


### Example

```typescript
import { SDK, ApplicationServicePodLogs2Params } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: StreamResultOfApplicationLogEntry = await sdk.applicationService.applicationServicePodLogs2(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **podName** | [**string**] |  | (optional) defaults to undefined |
| **container** | [**string**] |  | (optional) defaults to undefined |
| **sinceSeconds** | [**string**] |  | (optional) defaults to undefined |
| **sinceTimeSeconds** | [**string**] | Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. | (optional) defaults to undefined |
| **sinceTimeNanos** | [**number**] | Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context. | (optional) defaults to undefined |
| **tailLines** | [**string**] |  | (optional) defaults to undefined |
| **follow** | [**boolean**] |  | (optional) defaults to undefined |
| **untilTime** | [**string**] |  | (optional) defaults to undefined |
| **filter** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **previous** | [**boolean**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**StreamResultOfApplicationLogEntry**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response.(streaming responses) |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceResourceTree**
> V1alpha1ApplicationTree applicationServiceResourceTree()


### Example

```typescript
import { SDK, ApplicationServiceResourceTreeParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      applicationName: string, // required
    },
  };
  const result: V1alpha1ApplicationTree = await sdk.applicationService.applicationServiceResourceTree(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **applicationName** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationTree**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceRevisionChartDetails**
> V1alpha1ChartDetails applicationServiceRevisionChartDetails()


### Example

```typescript
import { SDK, ApplicationServiceRevisionChartDetailsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      revision: string, // required
    },
  };
  const result: V1alpha1ChartDetails = await sdk.applicationService.applicationServiceRevisionChartDetails(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the application\&#39;s name | defaults to undefined |
| **revision** | [**string**] | the revision of the app | defaults to undefined |
| **appNamespace** | [**string**] | the application\&#39;s namespace. | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1ChartDetails**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceRevisionMetadata**
> V1alpha1RevisionMetadata applicationServiceRevisionMetadata()


### Example

```typescript
import { SDK, ApplicationServiceRevisionMetadataParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      revision: string, // required
    },
  };
  const result: V1alpha1RevisionMetadata = await sdk.applicationService.applicationServiceRevisionMetadata(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the application\&#39;s name | defaults to undefined |
| **revision** | [**string**] | the revision of the app | defaults to undefined |
| **appNamespace** | [**string**] | the application\&#39;s namespace. | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1RevisionMetadata**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceRollback**
> V1alpha1Application applicationServiceRollback(body)


### Example

```typescript
import { SDK, ApplicationServiceRollbackParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: {
    appNamespace: "appNamespace_example",
    dryRun: true,
    id: "id_example",
    name: "name_example",
    project: "project_example",
    prune: true,
  },
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServiceRollback(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ApplicationApplicationRollbackRequest**|  |
| **name** | [**string**] |  | defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceRunResourceAction**
> any applicationServiceRunResourceAction(body)


### Example

```typescript
import { SDK, ApplicationServiceRunResourceActionParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: "body_example",
  };
  const result: any = await sdk.applicationService.applicationServiceRunResourceAction(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **string**|  |
| **name** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **resourceName** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceSync**
> V1alpha1Application applicationServiceSync(body)


### Example

```typescript
import { SDK, ApplicationServiceSyncParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: {
    appNamespace: "appNamespace_example",
    dryRun: true,
    infos: [
      {
        name: "name_example",
        value: "value_example",
      },
    ],
    manifests: [
      "manifests_example",
    ],
    name: "name_example",
    project: "project_example",
    prune: true,
    resources: [
      {
        group: "group_example",
        kind: "kind_example",
        name: "name_example",
        namespace: "namespace_example",
      },
    ],
    retryStrategy: {
      backoff: {
        duration: "duration_example",
        factor: "factor_example",
        maxDuration: "maxDuration_example",
      },
      limit: "limit_example",
    },
    revision: "revision_example",
    strategy: {
      apply: {
        force: true,
      },
      hook: {
        syncStrategyApply: {
          force: true,
        },
      },
    },
    syncOptions: {
      items: [
        "items_example",
      ],
    },
  },
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServiceSync(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ApplicationApplicationSyncRequest**|  |
| **name** | [**string**] |  | defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceTerminateOperation**
> any applicationServiceTerminateOperation()


### Example

```typescript
import { SDK, ApplicationServiceTerminateOperationParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: any = await sdk.applicationService.applicationServiceTerminateOperation(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceUpdate**
> V1alpha1Application applicationServiceUpdate(body)


### Example

```typescript
import { SDK, ApplicationServiceUpdateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      application.metadata.name: string, // required
    },
    data: {
    metadata: {
      annotations: {
        "key": "key_example",
      },
      clusterName: "clusterName_example",
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: "deletionGracePeriodSeconds_example",
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: "generation_example",
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {
            raw: 'YQ==',
          },
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    operation: {
      info: [
        {
          name: "name_example",
          value: "value_example",
        },
      ],
      initiatedBy: {
        automated: true,
        username: "username_example",
      },
      retry: {
        backoff: {
          duration: "duration_example",
          factor: "factor_example",
          maxDuration: "maxDuration_example",
        },
        limit: "limit_example",
      },
      sync: {
        dryRun: true,
        manifests: [
          "manifests_example",
        ],
        prune: true,
        resources: [
          {
            group: "group_example",
            kind: "kind_example",
            name: "name_example",
            namespace: "namespace_example",
          },
        ],
        revision: "revision_example",
        revisions: [
          "revisions_example",
        ],
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
        sources: [
          {
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
        ],
        syncOptions: [
          "syncOptions_example",
        ],
        syncStrategy: {
          apply: {
            force: true,
          },
          hook: {
            syncStrategyApply: {
              force: true,
            },
          },
        },
      },
    },
    spec: {
      destination: {
        name: "name_example",
        namespace: "namespace_example",
        server: "server_example",
      },
      ignoreDifferences: [
        {
          group: "group_example",
          jqPathExpressions: [
            "jqPathExpressions_example",
          ],
          jsonPointers: [
            "jsonPointers_example",
          ],
          kind: "kind_example",
          managedFieldsManagers: [
            "managedFieldsManagers_example",
          ],
          name: "name_example",
          namespace: "namespace_example",
        },
      ],
      info: [
        {
          name: "name_example",
          value: "value_example",
        },
      ],
      project: "project_example",
      revisionHistoryLimit: "revisionHistoryLimit_example",
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
      sources: [
        {
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
      ],
      syncPolicy: {
        automated: {
          allowEmpty: true,
          prune: true,
          selfHeal: true,
        },
        managedNamespaceMetadata: {
          annotations: {
            "key": "key_example",
          },
          labels: {
            "key": "key_example",
          },
        },
        retry: {
          backoff: {
            duration: "duration_example",
            factor: "factor_example",
            maxDuration: "maxDuration_example",
          },
          limit: "limit_example",
        },
        syncOptions: [
          "syncOptions_example",
        ],
      },
    },
    status: {
      conditions: [
        {
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          type: "type_example",
        },
      ],
      controllerNamespace: "controllerNamespace_example",
      health: {
        message: "message_example",
        status: "status_example",
      },
      history: [
        {
          deployStartedAt: new Date('1970-01-01T00:00:00.00Z'),
          deployedAt: new Date('1970-01-01T00:00:00.00Z'),
          id: "id_example",
          revision: "revision_example",
          revisions: [
            "revisions_example",
          ],
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
          sources: [
            {
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
          ],
        },
      ],
      observedAt: new Date('1970-01-01T00:00:00.00Z'),
      operationState: {
        finishedAt: new Date('1970-01-01T00:00:00.00Z'),
        message: "message_example",
        operation: {
          info: [
            {
              name: "name_example",
              value: "value_example",
            },
          ],
          initiatedBy: {
            automated: true,
            username: "username_example",
          },
          retry: {
            backoff: {
              duration: "duration_example",
              factor: "factor_example",
              maxDuration: "maxDuration_example",
            },
            limit: "limit_example",
          },
          sync: {
            dryRun: true,
            manifests: [
              "manifests_example",
            ],
            prune: true,
            resources: [
              {
                group: "group_example",
                kind: "kind_example",
                name: "name_example",
                namespace: "namespace_example",
              },
            ],
            revision: "revision_example",
            revisions: [
              "revisions_example",
            ],
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
            sources: [
              {
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
            ],
            syncOptions: [
              "syncOptions_example",
            ],
            syncStrategy: {
              apply: {
                force: true,
              },
              hook: {
                syncStrategyApply: {
                  force: true,
                },
              },
            },
          },
        },
        phase: "phase_example",
        retryCount: "retryCount_example",
        startedAt: new Date('1970-01-01T00:00:00.00Z'),
        syncResult: {
          managedNamespaceMetadata: {
            annotations: {
              "key": "key_example",
            },
            labels: {
              "key": "key_example",
            },
          },
          resources: [
            {
              group: "group_example",
              hookPhase: "hookPhase_example",
              hookType: "hookType_example",
              kind: "kind_example",
              message: "message_example",
              name: "name_example",
              namespace: "namespace_example",
              status: "status_example",
              syncPhase: "syncPhase_example",
              version: "version_example",
            },
          ],
          revision: "revision_example",
          revisions: [
            "revisions_example",
          ],
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
          sources: [
            {
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
          ],
        },
      },
      reconciledAt: new Date('1970-01-01T00:00:00.00Z'),
      resourceHealthSource: "resourceHealthSource_example",
      resources: [
        {
          group: "group_example",
          health: {
            message: "message_example",
            status: "status_example",
          },
          hook: true,
          kind: "kind_example",
          name: "name_example",
          namespace: "namespace_example",
          requiresPruning: true,
          status: "status_example",
          syncWave: "syncWave_example",
          version: "version_example",
        },
      ],
      sourceType: "sourceType_example",
      sourceTypes: [
        "sourceTypes_example",
      ],
      summary: {
        externalURLs: [
          "externalURLs_example",
        ],
        images: [
          "images_example",
        ],
      },
      sync: {
        comparedTo: {
          destination: {
            name: "name_example",
            namespace: "namespace_example",
            server: "server_example",
          },
          ignoreDifferences: [
            {
              group: "group_example",
              jqPathExpressions: [
                "jqPathExpressions_example",
              ],
              jsonPointers: [
                "jsonPointers_example",
              ],
              kind: "kind_example",
              managedFieldsManagers: [
                "managedFieldsManagers_example",
              ],
              name: "name_example",
              namespace: "namespace_example",
            },
          ],
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
          sources: [
            {
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
          ],
        },
        revision: "revision_example",
        revisions: [
          "revisions_example",
        ],
        status: "status_example",
      },
    },
  },
  };
  const result: V1alpha1Application = await sdk.applicationService.applicationServiceUpdate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1Application**|  |
| **applicationMetadataName** | [**string**] | Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional | defaults to undefined |
| **validate** | [**boolean**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1Application**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceUpdateSpec**
> V1alpha1ApplicationSpec applicationServiceUpdateSpec(body)


### Example

```typescript
import { SDK, ApplicationServiceUpdateSpecParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: {
    destination: {
      name: "name_example",
      namespace: "namespace_example",
      server: "server_example",
    },
    ignoreDifferences: [
      {
        group: "group_example",
        jqPathExpressions: [
          "jqPathExpressions_example",
        ],
        jsonPointers: [
          "jsonPointers_example",
        ],
        kind: "kind_example",
        managedFieldsManagers: [
          "managedFieldsManagers_example",
        ],
        name: "name_example",
        namespace: "namespace_example",
      },
    ],
    info: [
      {
        name: "name_example",
        value: "value_example",
      },
    ],
    project: "project_example",
    revisionHistoryLimit: "revisionHistoryLimit_example",
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
    sources: [
      {
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
    ],
    syncPolicy: {
      automated: {
        allowEmpty: true,
        prune: true,
        selfHeal: true,
      },
      managedNamespaceMetadata: {
        annotations: {
          "key": "key_example",
        },
        labels: {
          "key": "key_example",
        },
      },
      retry: {
        backoff: {
          duration: "duration_example",
          factor: "factor_example",
          maxDuration: "maxDuration_example",
        },
        limit: "limit_example",
      },
      syncOptions: [
        "syncOptions_example",
      ],
    },
  },
  };
  const result: V1alpha1ApplicationSpec = await sdk.applicationService.applicationServiceUpdateSpec(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1ApplicationSpec**|  |
| **name** | [**string**] |  | defaults to undefined |
| **validate** | [**boolean**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationSpec**

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

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceWatch**
> StreamResultOfV1alpha1ApplicationWatchEvent applicationServiceWatch()


### Example

```typescript
import { SDK, ApplicationServiceWatchParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: StreamResultOfV1alpha1ApplicationWatchEvent = await sdk.applicationService.applicationServiceWatch(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the application\&#39;s name. | (optional) defaults to undefined |
| **refresh** | [**string**] | forces application reconciliation if set to true. | (optional) defaults to undefined |
| **projects** | **Array&lt;string&gt;** | the project names to restrict returned list applications. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | when specified with a watch call, shows changes that occur after that particular version of a resource. | (optional) defaults to undefined |
| **selector** | [**string**] | the selector to restrict returned list to applications only with matched labels. | (optional) defaults to undefined |
| **repo** | [**string**] | the repoURL to restrict returned list applications. | (optional) defaults to undefined |
| **appNamespace** | [**string**] | the application\&#39;s namespace. | (optional) defaults to undefined |
| **project** | **Array&lt;string&gt;** | the project names to restrict returned list applications (legacy name for backwards-compatibility). | (optional) defaults to undefined |


### Return type

**StreamResultOfV1alpha1ApplicationWatchEvent**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response.(streaming responses) |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationServiceWatchResourceTree**
> StreamResultOfV1alpha1ApplicationTree applicationServiceWatchResourceTree()


### Example

```typescript
import { SDK, ApplicationServiceWatchResourceTreeParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      applicationName: string, // required
    },
  };
  const result: StreamResultOfV1alpha1ApplicationTree = await sdk.applicationService.applicationServiceWatchResourceTree(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **applicationName** | [**string**] |  | defaults to undefined |
| **namespace** | [**string**] |  | (optional) defaults to undefined |
| **name** | [**string**] |  | (optional) defaults to undefined |
| **version** | [**string**] |  | (optional) defaults to undefined |
| **group** | [**string**] |  | (optional) defaults to undefined |
| **kind** | [**string**] |  | (optional) defaults to undefined |
| **appNamespace** | [**string**] |  | (optional) defaults to undefined |
| **project** | [**string**] |  | (optional) defaults to undefined |


### Return type

**StreamResultOfV1alpha1ApplicationTree**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A successful response.(streaming responses) |  -  |
| **0** | An unexpected error response. |  -  |

[[Back to top]](ApplicationServiceApi.md#applicationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



# ProjectServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**projectServiceCreate**](ProjectServiceApi.md#projectservicecreate) | **POST** /api/v1/projects | Create a new project |
| [**projectServiceCreateToken**](ProjectServiceApi.md#projectservicecreatetoken) | **POST** /api/v1/projects/{project}/roles/{role}/token | Create a new project token |
| [**projectServiceDelete**](ProjectServiceApi.md#projectservicedelete) | **DELETE** /api/v1/projects/{name} | Delete deletes a project |
| [**projectServiceDeleteToken**](ProjectServiceApi.md#projectservicedeletetoken) | **DELETE** /api/v1/projects/{project}/roles/{role}/token/{iat} | Delete a new project token |
| [**projectServiceGet**](ProjectServiceApi.md#projectserviceget) | **GET** /api/v1/projects/{name} | Get returns a project by name |
| [**projectServiceGetDetailedProject**](ProjectServiceApi.md#projectservicegetdetailedproject) | **GET** /api/v1/projects/{name}/detailed | GetDetailedProject returns a project that include project, global project and scoped resources by name |
| [**projectServiceGetGlobalProjects**](ProjectServiceApi.md#projectservicegetglobalprojects) | **GET** /api/v1/projects/{name}/globalprojects | Get returns a virtual project by name |
| [**projectServiceGetSyncWindowsState**](ProjectServiceApi.md#projectservicegetsyncwindowsstate) | **GET** /api/v1/projects/{name}/syncwindows | GetSchedulesState returns true if there are any active sync syncWindows |
| [**projectServiceList**](ProjectServiceApi.md#projectservicelist) | **GET** /api/v1/projects | List returns list of projects |
| [**projectServiceListEvents**](ProjectServiceApi.md#projectservicelistevents) | **GET** /api/v1/projects/{name}/events | ListEvents returns a list of project events |
| [**projectServiceListLinks**](ProjectServiceApi.md#projectservicelistlinks) | **GET** /api/v1/projects/{name}/links | ListLinks returns all deep links for the particular project |
| [**projectServiceUpdate**](ProjectServiceApi.md#projectserviceupdate) | **PUT** /api/v1/projects/{project.metadata.name} | Update updates a project |


## **projectServiceCreate**
> V1alpha1AppProject projectServiceCreate(body)


### Example

```typescript
import { SDK, ProjectServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1AppProject = await sdk.projectService.projectServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ProjectProjectCreateRequest**|  |


### Return type

**V1alpha1AppProject**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceCreateToken**
> ProjectProjectTokenResponse projectServiceCreateToken(body)


### Example

```typescript
import { SDK, ProjectServiceCreateTokenParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      project: string, // required
      role: string, // required
    },
    data: {
    description: "description_example",
    expiresIn: "expiresIn_example",
    id: "id_example",
    project: "project_example",
    role: "role_example",
  },
  };
  const result: ProjectProjectTokenResponse = await sdk.projectService.projectServiceCreateToken(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ProjectProjectTokenCreateRequest**|  |
| **project** | [**string**] |  | defaults to undefined |
| **role** | [**string**] |  | defaults to undefined |


### Return type

**ProjectProjectTokenResponse**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceDelete**
> any projectServiceDelete()


### Example

```typescript
import { SDK, ProjectServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: any = await sdk.projectService.projectServiceDelete(params)
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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceDeleteToken**
> any projectServiceDeleteToken()


### Example

```typescript
import { SDK, ProjectServiceDeleteTokenParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      project: string, // required
      role: string, // required
      iat: string, // required
    },
  };
  const result: any = await sdk.projectService.projectServiceDeleteToken(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **project** | [**string**] |  | defaults to undefined |
| **role** | [**string**] |  | defaults to undefined |
| **iat** | [**string**] |  | defaults to undefined |
| **id** | [**string**] |  | (optional) defaults to undefined |


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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceGet**
> V1alpha1AppProject projectServiceGet()


### Example

```typescript
import { SDK, ProjectServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: V1alpha1AppProject = await sdk.projectService.projectServiceGet(params)
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


### Return type

**V1alpha1AppProject**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceGetDetailedProject**
> ProjectDetailedProjectsResponse projectServiceGetDetailedProject()


### Example

```typescript
import { SDK, ProjectServiceGetDetailedProjectParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ProjectDetailedProjectsResponse = await sdk.projectService.projectServiceGetDetailedProject(params)
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


### Return type

**ProjectDetailedProjectsResponse**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceGetGlobalProjects**
> ProjectGlobalProjectsResponse projectServiceGetGlobalProjects()


### Example

```typescript
import { SDK, ProjectServiceGetGlobalProjectsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ProjectGlobalProjectsResponse = await sdk.projectService.projectServiceGetGlobalProjects(params)
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


### Return type

**ProjectGlobalProjectsResponse**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceGetSyncWindowsState**
> ProjectSyncWindowsResponse projectServiceGetSyncWindowsState()


### Example

```typescript
import { SDK, ProjectServiceGetSyncWindowsStateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ProjectSyncWindowsResponse = await sdk.projectService.projectServiceGetSyncWindowsState(params)
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


### Return type

**ProjectSyncWindowsResponse**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceList**
> V1alpha1AppProjectList projectServiceList()


### Example

```typescript
import { SDK, ProjectServiceListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1AppProjectList = await sdk.projectService.projectServiceList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1AppProjectList**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceListEvents**
> V1EventList projectServiceListEvents()


### Example

```typescript
import { SDK, ProjectServiceListEventsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: V1EventList = await sdk.projectService.projectServiceListEvents(params)
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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceListLinks**
> ApplicationLinksResponse projectServiceListLinks()


### Example

```typescript
import { SDK, ProjectServiceListLinksParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationLinksResponse = await sdk.projectService.projectServiceListLinks(params)
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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **projectServiceUpdate**
> V1alpha1AppProject projectServiceUpdate(body)


### Example

```typescript
import { SDK, ProjectServiceUpdateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      project.metadata.name: string, // required
    },
    data: {
    project: {
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
      spec: {
        clusterResourceBlacklist: [
          {
            group: "group_example",
            kind: "kind_example",
          },
        ],
        clusterResourceWhitelist: [
          {
            group: "group_example",
            kind: "kind_example",
          },
        ],
        description: "description_example",
        destinations: [
          {
            name: "name_example",
            namespace: "namespace_example",
            server: "server_example",
          },
        ],
        namespaceResourceBlacklist: [
          {
            group: "group_example",
            kind: "kind_example",
          },
        ],
        namespaceResourceWhitelist: [
          {
            group: "group_example",
            kind: "kind_example",
          },
        ],
        orphanedResources: {
          ignore: [
            {
              group: "group_example",
              kind: "kind_example",
              name: "name_example",
            },
          ],
          warn: true,
        },
        permitOnlyProjectScopedClusters: true,
        roles: [
          {
            description: "description_example",
            groups: [
              "groups_example",
            ],
            jwtTokens: [
              {
                exp: "exp_example",
                iat: "iat_example",
                id: "id_example",
              },
            ],
            name: "name_example",
            policies: [
              "policies_example",
            ],
          },
        ],
        signatureKeys: [
          {
            keyID: "keyID_example",
          },
        ],
        sourceNamespaces: [
          "sourceNamespaces_example",
        ],
        sourceRepos: [
          "sourceRepos_example",
        ],
        syncWindows: [
          {
            applications: [
              "applications_example",
            ],
            clusters: [
              "clusters_example",
            ],
            duration: "duration_example",
            kind: "kind_example",
            manualSync: true,
            namespaces: [
              "namespaces_example",
            ],
            schedule: "schedule_example",
            timeZone: "timeZone_example",
          },
        ],
      },
      status: {
        jwtTokensByRole: {
          "key": {
            items: [
              {
                exp: "exp_example",
                iat: "iat_example",
                id: "id_example",
              },
            ],
          },
        },
      },
    },
  },
  };
  const result: V1alpha1AppProject = await sdk.projectService.projectServiceUpdate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **ProjectProjectUpdateRequest**|  |
| **projectMetadataName** | [**string**] | Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional | defaults to undefined |


### Return type

**V1alpha1AppProject**

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

[[Back to top]](ProjectServiceApi.md#projectserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



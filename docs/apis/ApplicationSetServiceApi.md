# ApplicationSetServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**applicationSetServiceCreate**](ApplicationSetServiceApi.md#applicationsetservicecreate) | **POST** /api/v1/applicationsets | Create creates an applicationset |
| [**applicationSetServiceDelete**](ApplicationSetServiceApi.md#applicationsetservicedelete) | **DELETE** /api/v1/applicationsets/{name} | Delete deletes an application set |
| [**applicationSetServiceGet**](ApplicationSetServiceApi.md#applicationsetserviceget) | **GET** /api/v1/applicationsets/{name} | Get returns an applicationset by name |
| [**applicationSetServiceList**](ApplicationSetServiceApi.md#applicationsetservicelist) | **GET** /api/v1/applicationsets | List returns list of applicationset |


## **applicationSetServiceCreate**
> V1alpha1ApplicationSet applicationSetServiceCreate(body)


### Example

```typescript
import { SDK, ApplicationSetServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1ApplicationSet = await sdk.applicationSetService.applicationSetServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1ApplicationSet**|  |
| **upsert** | [**boolean**] |  | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationSet**

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

[[Back to top]](ApplicationSetServiceApi.md#applicationsetserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationSetServiceDelete**
> ApplicationsetApplicationSetResponse applicationSetServiceDelete()


### Example

```typescript
import { SDK, ApplicationSetServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: ApplicationsetApplicationSetResponse = await sdk.applicationSetService.applicationSetServiceDelete(params)
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
| **appsetNamespace** | [**string**] | The application set namespace. Default empty is argocd control plane namespace. | (optional) defaults to undefined |


### Return type

**ApplicationsetApplicationSetResponse**

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

[[Back to top]](ApplicationSetServiceApi.md#applicationsetserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationSetServiceGet**
> V1alpha1ApplicationSet applicationSetServiceGet()


### Example

```typescript
import { SDK, ApplicationSetServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: V1alpha1ApplicationSet = await sdk.applicationSetService.applicationSetServiceGet(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | the applicationsets\&#39;s name | defaults to undefined |
| **appsetNamespace** | [**string**] | The application set namespace. Default empty is argocd control plane namespace. | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationSet**

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

[[Back to top]](ApplicationSetServiceApi.md#applicationsetserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **applicationSetServiceList**
> V1alpha1ApplicationSetList applicationSetServiceList()


### Example

```typescript
import { SDK, ApplicationSetServiceListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1ApplicationSetList = await sdk.applicationSetService.applicationSetServiceList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **projects** | **Array&lt;string&gt;** | the project names to restrict returned list applicationsets. | (optional) defaults to undefined |
| **selector** | [**string**] | the selector to restrict returned list to applications only with matched labels. | (optional) defaults to undefined |
| **appsetNamespace** | [**string**] | The application set namespace. Default empty is argocd control plane namespace. | (optional) defaults to undefined |


### Return type

**V1alpha1ApplicationSetList**

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

[[Back to top]](ApplicationSetServiceApi.md#applicationsetserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



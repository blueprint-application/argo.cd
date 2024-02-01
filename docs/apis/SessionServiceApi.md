# SessionServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**sessionServiceCreate**](SessionServiceApi.md#sessionservicecreate) | **POST** /api/v1/session | Create a new JWT for authentication and set a cookie if using HTTP |
| [**sessionServiceDelete**](SessionServiceApi.md#sessionservicedelete) | **DELETE** /api/v1/session | Delete an existing JWT cookie if using HTTP |
| [**sessionServiceGetUserInfo**](SessionServiceApi.md#sessionservicegetuserinfo) | **GET** /api/v1/session/userinfo | Get the current user\&#39;s info |


## **sessionServiceCreate**
> SessionSessionResponse sessionServiceCreate(body)


### Example

```typescript
import { SDK, SessionServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: SessionSessionResponse = await sdk.sessionService.sessionServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **SessionSessionCreateRequest**|  |


### Return type

**SessionSessionResponse**

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

[[Back to top]](SessionServiceApi.md#sessionserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **sessionServiceDelete**
> SessionSessionResponse sessionServiceDelete()


### Example

```typescript
import { SDK, SessionServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: SessionSessionResponse = await sdk.sessionService.sessionServiceDelete()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**SessionSessionResponse**

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

[[Back to top]](SessionServiceApi.md#sessionserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **sessionServiceGetUserInfo**
> SessionGetUserInfoResponse sessionServiceGetUserInfo()


### Example

```typescript
import { SDK, SessionServiceGetUserInfoParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: SessionGetUserInfoResponse = await sdk.sessionService.sessionServiceGetUserInfo()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**SessionGetUserInfoResponse**

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

[[Back to top]](SessionServiceApi.md#sessionserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



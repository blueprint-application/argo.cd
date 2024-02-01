# VersionServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**versionServiceVersion**](VersionServiceApi.md#versionserviceversion) | **GET** /api/version | Version returns version information of the API server |


## **versionServiceVersion**
> VersionVersionMessage versionServiceVersion()


### Example

```typescript
import { SDK, VersionServiceVersionParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: VersionVersionMessage = await sdk.versionService.versionServiceVersion()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**VersionVersionMessage**

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

[[Back to top]](VersionServiceApi.md#versionserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



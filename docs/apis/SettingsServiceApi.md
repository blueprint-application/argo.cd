# SettingsServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**settingsServiceGet**](SettingsServiceApi.md#settingsserviceget) | **GET** /api/v1/settings | Get returns Argo CD settings |
| [**settingsServiceGetPlugins**](SettingsServiceApi.md#settingsservicegetplugins) | **GET** /api/v1/settings/plugins | Get returns Argo CD plugins |


## **settingsServiceGet**
> ClusterSettings settingsServiceGet()


### Example

```typescript
import { SDK, SettingsServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: ClusterSettings = await sdk.settingsService.settingsServiceGet()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**ClusterSettings**

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

[[Back to top]](SettingsServiceApi.md#settingsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **settingsServiceGetPlugins**
> ClusterSettingsPluginsResponse settingsServiceGetPlugins()


### Example

```typescript
import { SDK, SettingsServiceGetPluginsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: ClusterSettingsPluginsResponse = await sdk.settingsService.settingsServiceGetPlugins()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**ClusterSettingsPluginsResponse**

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

[[Back to top]](SettingsServiceApi.md#settingsserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



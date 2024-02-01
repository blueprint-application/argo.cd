# NotificationServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**notificationServiceListServices**](NotificationServiceApi.md#notificationservicelistservices) | **GET** /api/v1/notifications/services | List returns list of services |
| [**notificationServiceListTemplates**](NotificationServiceApi.md#notificationservicelisttemplates) | **GET** /api/v1/notifications/templates | List returns list of templates |
| [**notificationServiceListTriggers**](NotificationServiceApi.md#notificationservicelisttriggers) | **GET** /api/v1/notifications/triggers | List returns list of triggers |


## **notificationServiceListServices**
> NotificationServiceList notificationServiceListServices()


### Example

```typescript
import { SDK, NotificationServiceListServicesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: NotificationServiceList = await sdk.notificationService.notificationServiceListServices()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**NotificationServiceList**

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

[[Back to top]](NotificationServiceApi.md#notificationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **notificationServiceListTemplates**
> NotificationTemplateList notificationServiceListTemplates()


### Example

```typescript
import { SDK, NotificationServiceListTemplatesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: NotificationTemplateList = await sdk.notificationService.notificationServiceListTemplates()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**NotificationTemplateList**

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

[[Back to top]](NotificationServiceApi.md#notificationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **notificationServiceListTriggers**
> NotificationTriggerList notificationServiceListTriggers()


### Example

```typescript
import { SDK, NotificationServiceListTriggersParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: NotificationTriggerList = await sdk.notificationService.notificationServiceListTriggers()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**NotificationTriggerList**

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

[[Back to top]](NotificationServiceApi.md#notificationserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



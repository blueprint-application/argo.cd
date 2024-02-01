# GPGKeyServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**gPGKeyServiceCreate**](GPGKeyServiceApi.md#gpgkeyservicecreate) | **POST** /api/v1/gpgkeys | Create one or more GPG public keys in the server\&#39;s configuration |
| [**gPGKeyServiceDelete**](GPGKeyServiceApi.md#gpgkeyservicedelete) | **DELETE** /api/v1/gpgkeys | Delete specified GPG public key from the server\&#39;s configuration |
| [**gPGKeyServiceGet**](GPGKeyServiceApi.md#gpgkeyserviceget) | **GET** /api/v1/gpgkeys/{keyID} | Get information about specified GPG public key from the server |
| [**gPGKeyServiceList**](GPGKeyServiceApi.md#gpgkeyservicelist) | **GET** /api/v1/gpgkeys | List all available repository certificates |


## **gPGKeyServiceCreate**
> GpgkeyGnuPGPublicKeyCreateResponse gPGKeyServiceCreate(body)


### Example

```typescript
import { SDK, GPGKeyServiceCreateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: GpgkeyGnuPGPublicKeyCreateResponse = await sdk.gPGKeyService.gPGKeyServiceCreate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1GnuPGPublicKey**| Raw key data of the GPG key(s) to create |
| **upsert** | [**boolean**] | Whether to upsert already existing public keys. | (optional) defaults to undefined |


### Return type

**GpgkeyGnuPGPublicKeyCreateResponse**

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

[[Back to top]](GPGKeyServiceApi.md#gpgkeyserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **gPGKeyServiceDelete**
> any gPGKeyServiceDelete()


### Example

```typescript
import { SDK, GPGKeyServiceDeleteParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: any = await sdk.gPGKeyService.gPGKeyServiceDelete(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **keyID** | [**string**] | The GPG key ID to query for. | (optional) defaults to undefined |


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

[[Back to top]](GPGKeyServiceApi.md#gpgkeyserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **gPGKeyServiceGet**
> V1alpha1GnuPGPublicKey gPGKeyServiceGet()


### Example

```typescript
import { SDK, GPGKeyServiceGetParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      keyID: string, // required
    },
  };
  const result: V1alpha1GnuPGPublicKey = await sdk.gPGKeyService.gPGKeyServiceGet(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **keyID** | [**string**] | The GPG key ID to query for | defaults to undefined |


### Return type

**V1alpha1GnuPGPublicKey**

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

[[Back to top]](GPGKeyServiceApi.md#gpgkeyserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **gPGKeyServiceList**
> V1alpha1GnuPGPublicKeyList gPGKeyServiceList()


### Example

```typescript
import { SDK, GPGKeyServiceListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1GnuPGPublicKeyList = await sdk.gPGKeyService.gPGKeyServiceList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **keyID** | [**string**] | The GPG key ID to query for. | (optional) defaults to undefined |


### Return type

**V1alpha1GnuPGPublicKeyList**

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

[[Back to top]](GPGKeyServiceApi.md#gpgkeyserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



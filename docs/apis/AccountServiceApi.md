# AccountServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**accountServiceCanI**](AccountServiceApi.md#accountservicecani) | **GET** /api/v1/account/can-i/{resource}/{action}/{subresource} | CanI checks if the current account has permission to perform an action |
| [**accountServiceCreateToken**](AccountServiceApi.md#accountservicecreatetoken) | **POST** /api/v1/account/{name}/token | CreateToken creates a token |
| [**accountServiceDeleteToken**](AccountServiceApi.md#accountservicedeletetoken) | **DELETE** /api/v1/account/{name}/token/{id} | DeleteToken deletes a token |
| [**accountServiceGetAccount**](AccountServiceApi.md#accountservicegetaccount) | **GET** /api/v1/account/{name} | GetAccount returns an account |
| [**accountServiceListAccounts**](AccountServiceApi.md#accountservicelistaccounts) | **GET** /api/v1/account | ListAccounts returns the list of accounts |
| [**accountServiceUpdatePassword**](AccountServiceApi.md#accountserviceupdatepassword) | **PUT** /api/v1/account/password | UpdatePassword updates an account\&#39;s password to a new value |


## **accountServiceCanI**
> AccountCanIResponse accountServiceCanI()


### Example

```typescript
import { SDK, AccountServiceCanIParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      resource: string, // required
      action: string, // required
      subresource: string, // required
    },
  };
  const result: AccountCanIResponse = await sdk.accountService.accountServiceCanI(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **resource** | [**string**] |  | defaults to undefined |
| **action** | [**string**] |  | defaults to undefined |
| **subresource** | [**string**] |  | defaults to undefined |


### Return type

**AccountCanIResponse**

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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **accountServiceCreateToken**
> AccountCreateTokenResponse accountServiceCreateToken(body)


### Example

```typescript
import { SDK, AccountServiceCreateTokenParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
    data: {
    expiresIn: "expiresIn_example",
    id: "id_example",
    name: "name_example",
  },
  };
  const result: AccountCreateTokenResponse = await sdk.accountService.accountServiceCreateToken(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **AccountCreateTokenRequest**|  |
| **name** | [**string**] |  | defaults to undefined |


### Return type

**AccountCreateTokenResponse**

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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **accountServiceDeleteToken**
> any accountServiceDeleteToken()


### Example

```typescript
import { SDK, AccountServiceDeleteTokenParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      id: string, // required
    },
  };
  const result: any = await sdk.accountService.accountServiceDeleteToken(params)
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
| **id** | [**string**] |  | defaults to undefined |


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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **accountServiceGetAccount**
> AccountAccount accountServiceGetAccount()


### Example

```typescript
import { SDK, AccountServiceGetAccountParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
    },
  };
  const result: AccountAccount = await sdk.accountService.accountServiceGetAccount(params)
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

**AccountAccount**

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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **accountServiceListAccounts**
> AccountAccountsList accountServiceListAccounts()


### Example

```typescript
import { SDK, AccountServiceListAccountsParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: AccountAccountsList = await sdk.accountService.accountServiceListAccounts()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**AccountAccountsList**

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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **accountServiceUpdatePassword**
> any accountServiceUpdatePassword(body)


### Example

```typescript
import { SDK, AccountServiceUpdatePasswordParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: any = await sdk.accountService.accountServiceUpdatePassword(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **AccountUpdatePasswordRequest**|  |


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

[[Back to top]](AccountServiceApi.md#accountserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



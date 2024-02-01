# CertificateServiceApi

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**certificateServiceCreateCertificate**](CertificateServiceApi.md#certificateservicecreatecertificate) | **POST** /api/v1/certificates | Creates repository certificates on the server |
| [**certificateServiceDeleteCertificate**](CertificateServiceApi.md#certificateservicedeletecertificate) | **DELETE** /api/v1/certificates | Delete the certificates that match the RepositoryCertificateQuery |
| [**certificateServiceListCertificates**](CertificateServiceApi.md#certificateservicelistcertificates) | **GET** /api/v1/certificates | List all available repository certificates |


## **certificateServiceCreateCertificate**
> V1alpha1RepositoryCertificateList certificateServiceCreateCertificate(body)


### Example

```typescript
import { SDK, CertificateServiceCreateCertificateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepositoryCertificateList = await sdk.certificateService.certificateServiceCreateCertificate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **V1alpha1RepositoryCertificateList**| List of certificates to be created |
| **upsert** | [**boolean**] | Whether to upsert already existing certificates. | (optional) defaults to undefined |


### Return type

**V1alpha1RepositoryCertificateList**

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

[[Back to top]](CertificateServiceApi.md#certificateserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **certificateServiceDeleteCertificate**
> V1alpha1RepositoryCertificateList certificateServiceDeleteCertificate()


### Example

```typescript
import { SDK, CertificateServiceDeleteCertificateParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepositoryCertificateList = await sdk.certificateService.certificateServiceDeleteCertificate(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **hostNamePattern** | [**string**] | A file-glob pattern (not regular expression) the host name has to match. | (optional) defaults to undefined |
| **certType** | [**string**] | The type of the certificate to match (ssh or https). | (optional) defaults to undefined |
| **certSubType** | [**string**] | The sub type of the certificate to match (protocol dependent, usually only used for ssh certs). | (optional) defaults to undefined |


### Return type

**V1alpha1RepositoryCertificateList**

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

[[Back to top]](CertificateServiceApi.md#certificateserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **certificateServiceListCertificates**
> V1alpha1RepositoryCertificateList certificateServiceListCertificates()


### Example

```typescript
import { SDK, CertificateServiceListCertificatesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: V1alpha1RepositoryCertificateList = await sdk.certificateService.certificateServiceListCertificates(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **hostNamePattern** | [**string**] | A file-glob pattern (not regular expression) the host name has to match. | (optional) defaults to undefined |
| **certType** | [**string**] | The type of the certificate to match (ssh or https). | (optional) defaults to undefined |
| **certSubType** | [**string**] | The sub type of the certificate to match (protocol dependent, usually only used for ssh certs). | (optional) defaults to undefined |


### Return type

**V1alpha1RepositoryCertificateList**

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

[[Back to top]](CertificateServiceApi.md#certificateserviceapi) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)



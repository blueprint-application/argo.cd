# V1alpha1TLSClientConfigModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caData** | **string** |  | [optional] [default to undefined]
**certData** | **string** |  | [optional] [default to undefined]
**insecure** | **boolean** | Insecure specifies that the server should be accessed without verifying the TLS certificate. For testing only. | [optional] [default to undefined]
**keyData** | **string** |  | [optional] [default to undefined]
**serverName** | **string** | ServerName is passed to the server for SNI and is used in the client to check server certificates against. If ServerName is empty, the hostname used to contact the server is used. | [optional] [default to undefined]



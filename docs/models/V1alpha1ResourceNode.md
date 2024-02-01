# V1alpha1ResourceNodeModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**health** | [**V1alpha1HealthStatus**](V1alpha1HealthStatus.md) |  | [optional] [default to undefined]
**images** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**info** | [**Array&lt;V1alpha1InfoItem&gt;**](V1alpha1InfoItem.md) |  | [optional] [default to undefined]
**networkingInfo** | [**V1alpha1ResourceNetworkingInfo**](V1alpha1ResourceNetworkingInfo.md) |  | [optional] [default to undefined]
**parentRefs** | [**Array&lt;V1alpha1ResourceRef&gt;**](V1alpha1ResourceRef.md) |  | [optional] [default to undefined]
**resourceVersion** | **string** |  | [optional] [default to undefined]
**group** | **string** |  | [optional] [default to undefined]
**kind** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**uid** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]



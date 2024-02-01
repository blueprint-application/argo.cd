# V1EventModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **string** |  | [optional] [default to undefined]
**count** | **number** |  | [optional] [default to undefined]
**eventTime** | [**V1MicroTime**](V1MicroTime.md) |  | [optional] [default to undefined]
**firstTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**involvedObject** | [**V1ObjectReference**](V1ObjectReference.md) |  | [optional] [default to undefined]
**lastTimestamp** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**metadata** | [**V1ObjectMeta**](V1ObjectMeta.md) |  | [optional] [default to undefined]
**reason** | **string** |  | [optional] [default to undefined]
**related** | [**V1ObjectReference**](V1ObjectReference.md) |  | [optional] [default to undefined]
**reportingComponent** | **string** |  | [optional] [default to undefined]
**reportingInstance** | **string** |  | [optional] [default to undefined]
**series** | [**V1EventSeries**](V1EventSeries.md) |  | [optional] [default to undefined]
**source** | [**V1EventSource**](V1EventSource.md) |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]



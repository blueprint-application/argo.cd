# V1alpha1OperationStateModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finishedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**message** | **string** | Message holds any pertinent messages when attempting to perform operation (typically errors). | [optional] [default to undefined]
**operation** | [**V1alpha1Operation**](V1alpha1Operation.md) |  | [optional] [default to undefined]
**phase** | **string** |  | [optional] [default to undefined]
**retryCount** | **string** |  | [optional] [default to undefined]
**startedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**syncResult** | [**V1alpha1SyncOperationResult**](V1alpha1SyncOperationResult.md) |  | [optional] [default to undefined]



# V1alpha1ApplicationStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;V1alpha1ApplicationCondition&gt;**](V1alpha1ApplicationCondition.md) |  | [optional] [default to undefined]
**controllerNamespace** | **string** |  | [optional] [default to undefined]
**health** | [**V1alpha1HealthStatus**](V1alpha1HealthStatus.md) |  | [optional] [default to undefined]
**history** | [**Array&lt;V1alpha1RevisionHistory&gt;**](V1alpha1RevisionHistory.md) |  | [optional] [default to undefined]
**observedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**operationState** | [**V1alpha1OperationState**](V1alpha1OperationState.md) |  | [optional] [default to undefined]
**reconciledAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**resourceHealthSource** | **string** |  | [optional] [default to undefined]
**resources** | [**Array&lt;V1alpha1ResourceStatus&gt;**](V1alpha1ResourceStatus.md) |  | [optional] [default to undefined]
**sourceType** | **string** |  | [optional] [default to undefined]
**sourceTypes** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**summary** | [**V1alpha1ApplicationSummary**](V1alpha1ApplicationSummary.md) |  | [optional] [default to undefined]
**sync** | [**V1alpha1SyncStatus**](V1alpha1SyncStatus.md) |  | [optional] [default to undefined]



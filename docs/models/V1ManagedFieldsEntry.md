# V1ManagedFieldsEntryModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **string** | APIVersion defines the version of this resource that this field set applies to. The format is \&quot;group/version\&quot; just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted. | [optional] [default to undefined]
**fieldsType** | **string** |  | [optional] [default to undefined]
**fieldsV1** | [**V1FieldsV1**](V1FieldsV1.md) |  | [optional] [default to undefined]
**manager** | **string** | Manager is an identifier of the workflow managing these fields. | [optional] [default to undefined]
**operation** | **string** | Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are \&#39;Apply\&#39; and \&#39;Update\&#39;. | [optional] [default to undefined]
**subresource** | **string** | Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource. | [optional] [default to undefined]
**time** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]



# V1alpha1RevisionMetadataModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **string** |  | [optional] [default to undefined]
**date** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**message** | **string** | Message contains the message associated with the revision, most likely the commit message. | [optional] [default to undefined]
**signatureInfo** | **string** | SignatureInfo contains a hint on the signer if the revision was signed with GPG, and signature verification is enabled. | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]



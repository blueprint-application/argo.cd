# V1alpha1ClusterModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**clusterResources** | **boolean** | Indicates if cluster level resources should be managed. This setting is used only if cluster is connected in a namespaced mode. | [optional] [default to undefined]
**config** | [**V1alpha1ClusterConfig**](V1alpha1ClusterConfig.md) |  | [optional] [default to undefined]
**connectionState** | [**V1alpha1ConnectionState**](V1alpha1ConnectionState.md) |  | [optional] [default to undefined]
**info** | [**V1alpha1ClusterInfo**](V1alpha1ClusterInfo.md) |  | [optional] [default to undefined]
**labels** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**namespaces** | **Array&lt;string&gt;** | Holds list of namespaces which are accessible in that cluster. Cluster level resources will be ignored if namespace list is not empty. | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**refreshRequestedAt** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal&#x3D;false +protobuf.as&#x3D;Timestamp +protobuf.options.(gogoproto.goproto_stringer)&#x3D;false | [optional] [default to undefined]
**server** | **string** |  | [optional] [default to undefined]
**serverVersion** | **string** |  | [optional] [default to undefined]
**shard** | **string** | Shard contains optional shard number. Calculated on the fly by the application controller if not specified. | [optional] [default to undefined]



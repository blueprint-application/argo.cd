# V1alpha1ResourceNetworkingInfoModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalURLs** | **Array&lt;string&gt;** | ExternalURLs holds list of URLs which should be available externally. List is populated for ingress resources using rules hostnames. | [optional] [default to undefined]
**ingress** | [**Array&lt;V1LoadBalancerIngress&gt;**](V1LoadBalancerIngress.md) |  | [optional] [default to undefined]
**labels** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**targetLabels** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**targetRefs** | [**Array&lt;V1alpha1ResourceRef&gt;**](V1alpha1ResourceRef.md) |  | [optional] [default to undefined]



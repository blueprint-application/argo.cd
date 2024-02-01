# V1NodeSystemInfoModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** |  | [optional] [default to undefined]
**bootID** | **string** | Boot ID reported by the node. | [optional] [default to undefined]
**containerRuntimeVersion** | **string** | ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2). | [optional] [default to undefined]
**kernelVersion** | **string** | Kernel Version reported by the node from \&#39;uname -r\&#39; (e.g. 3.16.0-0.bpo.4-amd64). | [optional] [default to undefined]
**kubeProxyVersion** | **string** | KubeProxy Version reported by the node. | [optional] [default to undefined]
**kubeletVersion** | **string** | Kubelet Version reported by the node. | [optional] [default to undefined]
**machineID** | **string** |  | [optional] [default to undefined]
**operatingSystem** | **string** |  | [optional] [default to undefined]
**osImage** | **string** | OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)). | [optional] [default to undefined]
**systemUUID** | **string** |  | [optional] [default to undefined]



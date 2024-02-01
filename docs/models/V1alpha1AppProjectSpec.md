# V1alpha1AppProjectSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusterResourceBlacklist** | [**Array&lt;V1GroupKind&gt;**](V1GroupKind.md) |  | [optional] [default to undefined]
**clusterResourceWhitelist** | [**Array&lt;V1GroupKind&gt;**](V1GroupKind.md) |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**destinations** | [**Array&lt;V1alpha1ApplicationDestination&gt;**](V1alpha1ApplicationDestination.md) |  | [optional] [default to undefined]
**namespaceResourceBlacklist** | [**Array&lt;V1GroupKind&gt;**](V1GroupKind.md) |  | [optional] [default to undefined]
**namespaceResourceWhitelist** | [**Array&lt;V1GroupKind&gt;**](V1GroupKind.md) |  | [optional] [default to undefined]
**orphanedResources** | [**V1alpha1OrphanedResourcesMonitorSettings**](V1alpha1OrphanedResourcesMonitorSettings.md) |  | [optional] [default to undefined]
**permitOnlyProjectScopedClusters** | **boolean** |  | [optional] [default to undefined]
**roles** | [**Array&lt;V1alpha1ProjectRole&gt;**](V1alpha1ProjectRole.md) |  | [optional] [default to undefined]
**signatureKeys** | [**Array&lt;V1alpha1SignatureKey&gt;**](V1alpha1SignatureKey.md) |  | [optional] [default to undefined]
**sourceNamespaces** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**sourceRepos** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**syncWindows** | [**Array&lt;V1alpha1SyncWindow&gt;**](V1alpha1SyncWindow.md) |  | [optional] [default to undefined]



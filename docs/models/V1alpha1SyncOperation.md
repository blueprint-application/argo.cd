# V1alpha1SyncOperationModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dryRun** | **boolean** |  | [optional] [default to undefined]
**manifests** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**prune** | **boolean** |  | [optional] [default to undefined]
**resources** | [**Array&lt;V1alpha1SyncOperationResource&gt;**](V1alpha1SyncOperationResource.md) |  | [optional] [default to undefined]
**revision** | **string** | Revision is the revision (Git) or chart version (Helm) which to sync the application to If omitted, will use the revision specified in app spec. | [optional] [default to undefined]
**revisions** | **Array&lt;string&gt;** | Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to If omitted, will use the revision specified in app spec. | [optional] [default to undefined]
**source** | [**V1alpha1ApplicationSource**](V1alpha1ApplicationSource.md) |  | [optional] [default to undefined]
**sources** | [**Array&lt;V1alpha1ApplicationSource&gt;**](V1alpha1ApplicationSource.md) |  | [optional] [default to undefined]
**syncOptions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**syncStrategy** | [**V1alpha1SyncStrategy**](V1alpha1SyncStrategy.md) |  | [optional] [default to undefined]



# V1alpha1ApplicationSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**V1alpha1ApplicationDestination**](V1alpha1ApplicationDestination.md) |  | [optional] [default to undefined]
**ignoreDifferences** | [**Array&lt;V1alpha1ResourceIgnoreDifferences&gt;**](V1alpha1ResourceIgnoreDifferences.md) |  | [optional] [default to undefined]
**info** | [**Array&lt;V1alpha1Info&gt;**](V1alpha1Info.md) |  | [optional] [default to undefined]
**project** | **string** | Project is a reference to the project this application belongs to. The empty string means that application belongs to the \&#39;default\&#39; project. | [optional] [default to undefined]
**revisionHistoryLimit** | **string** | RevisionHistoryLimit limits the number of items kept in the application\&#39;s revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10. | [optional] [default to undefined]
**source** | [**V1alpha1ApplicationSource**](V1alpha1ApplicationSource.md) |  | [optional] [default to undefined]
**sources** | [**Array&lt;V1alpha1ApplicationSource&gt;**](V1alpha1ApplicationSource.md) |  | [optional] [default to undefined]
**syncPolicy** | [**V1alpha1SyncPolicy**](V1alpha1SyncPolicy.md) |  | [optional] [default to undefined]



# V1alpha1ApplicationSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart** | **string** | Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo. | [optional] [default to undefined]
**directory** | [**V1alpha1ApplicationSourceDirectory**](V1alpha1ApplicationSourceDirectory.md) |  | [optional] [default to undefined]
**helm** | [**V1alpha1ApplicationSourceHelm**](V1alpha1ApplicationSourceHelm.md) |  | [optional] [default to undefined]
**kustomize** | [**V1alpha1ApplicationSourceKustomize**](V1alpha1ApplicationSourceKustomize.md) |  | [optional] [default to undefined]
**path** | **string** | Path is a directory path within the Git repository, and is only valid for applications sourced from Git. | [optional] [default to undefined]
**plugin** | [**V1alpha1ApplicationSourcePlugin**](V1alpha1ApplicationSourcePlugin.md) |  | [optional] [default to undefined]
**ref** | **string** | Ref is reference to another source within sources field. This field will not be used if used with a &#x60;source&#x60; tag. | [optional] [default to undefined]
**repoURL** | **string** |  | [optional] [default to undefined]
**targetRevision** | **string** | TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart\&#39;s version. | [optional] [default to undefined]



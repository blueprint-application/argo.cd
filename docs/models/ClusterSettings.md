# ClusterSettingsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appLabelKey** | **string** |  | [optional] [default to undefined]
**appsInAnyNamespaceEnabled** | **boolean** |  | [optional] [default to undefined]
**configManagementPlugins** | [**Array&lt;V1alpha1ConfigManagementPlugin&gt;**](V1alpha1ConfigManagementPlugin.md) | Deprecated: use sidecar plugins instead. | [optional] [default to undefined]
**controllerNamespace** | **string** |  | [optional] [default to undefined]
**dexConfig** | [**ClusterDexConfig**](ClusterDexConfig.md) |  | [optional] [default to undefined]
**execEnabled** | **boolean** |  | [optional] [default to undefined]
**googleAnalytics** | [**ClusterGoogleAnalyticsConfig**](ClusterGoogleAnalyticsConfig.md) |  | [optional] [default to undefined]
**help** | [**ClusterHelp**](ClusterHelp.md) |  | [optional] [default to undefined]
**kustomizeOptions** | [**V1alpha1KustomizeOptions**](V1alpha1KustomizeOptions.md) |  | [optional] [default to undefined]
**kustomizeVersions** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**oidcConfig** | [**ClusterOIDCConfig**](ClusterOIDCConfig.md) |  | [optional] [default to undefined]
**passwordPattern** | **string** |  | [optional] [default to undefined]
**plugins** | [**Array&lt;ClusterPlugin&gt;**](ClusterPlugin.md) |  | [optional] [default to undefined]
**resourceOverrides** | [**{ [key: string]: V1alpha1ResourceOverride; }**](V1alpha1ResourceOverride.md) |  | [optional] [default to undefined]
**statusBadgeEnabled** | **boolean** |  | [optional] [default to undefined]
**statusBadgeRootUrl** | **string** |  | [optional] [default to undefined]
**trackingMethod** | **string** |  | [optional] [default to undefined]
**uiBannerContent** | **string** |  | [optional] [default to undefined]
**uiBannerPermanent** | **boolean** |  | [optional] [default to undefined]
**uiBannerPosition** | **string** |  | [optional] [default to undefined]
**uiBannerURL** | **string** |  | [optional] [default to undefined]
**uiCssURL** | **string** |  | [optional] [default to undefined]
**url** | **string** |  | [optional] [default to undefined]
**userLoginsDisabled** | **boolean** |  | [optional] [default to undefined]



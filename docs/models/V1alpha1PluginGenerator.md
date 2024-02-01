# V1alpha1PluginGeneratorModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configMapRef** | [**V1alpha1PluginConfigMapRef**](V1alpha1PluginConfigMapRef.md) |  | [optional] [default to undefined]
**input** | [**V1alpha1PluginInput**](V1alpha1PluginInput.md) |  | [optional] [default to undefined]
**requeueAfterSeconds** | **string** | RequeueAfterSeconds determines how long the ApplicationSet controller will wait before reconciling the ApplicationSet again. | [optional] [default to undefined]
**template** | [**V1alpha1ApplicationSetTemplate**](V1alpha1ApplicationSetTemplate.md) |  | [optional] [default to undefined]
**values** | **{ [key: string]: string; }** | Values contains key/value pairs which are passed directly as parameters to the template. These values will not be sent as parameters to the plugin. | [optional] [default to undefined]



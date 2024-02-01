# RepositoryParameterAnnouncementModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**array** | **Array&lt;string&gt;** | array is the default value of the parameter if the parameter is an array. | [optional] [default to undefined]
**collectionType** | **string** | collectionType is the type of value this parameter holds - either a single value (a string) or a collection (array or map). If collectionType is set, only the field with that type will be used. If collectionType is not set, &#x60;string&#x60; is the default. If collectionType is set to an invalid value, a validation error is thrown. | [optional] [default to undefined]
**itemType** | **string** | itemType determines the primitive data type represented by the parameter. Parameters are always encoded as strings, but this field lets them be interpreted as other primitive types. | [optional] [default to undefined]
**map** | **{ [key: string]: string; }** | map is the default value of the parameter if the parameter is a map. | [optional] [default to undefined]
**name** | **string** | name is the name identifying a parameter. | [optional] [default to undefined]
**required** | **boolean** | required defines if this given parameter is mandatory. | [optional] [default to undefined]
**string** | **string** | string is the default value of the parameter if the parameter is a string. | [optional] [default to undefined]
**title** | **string** | title is a human-readable text of the parameter name. | [optional] [default to undefined]
**tooltip** | **string** | tooltip is a human-readable description of the parameter. | [optional] [default to undefined]



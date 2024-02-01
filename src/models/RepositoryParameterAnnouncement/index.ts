import { BaseModel } from '../types';
import type { RepositoryParameterAnnouncementModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryParameterAnnouncementModel extends BaseModel {
  // array is the default value of the parameter if the parameter is an array.
  array?: Array<string>;
  // collectionType is the type of value this parameter holds - either a single value (a string) or a collection (array or map). If collectionType is set, only the field with that type will be used. If collectionType is not set, `string` is the default. If collectionType is set to an invalid value, a validation error is thrown.
  collectionType?: string;
  // itemType determines the primitive data type represented by the parameter. Parameters are always encoded as strings, but this field lets them be interpreted as other primitive types.
  itemType?: string;
  // map is the default value of the parameter if the parameter is a map.
  map?: { [key: string]: string };
  // name is the name identifying a parameter.
  name?: string;
  // required defines if this given parameter is mandatory.
  required?: boolean;
  // string is the default value of the parameter if the parameter is a string.
  string?: string;
  // title is a human-readable text of the parameter name.
  title?: string;
  // tooltip is a human-readable description of the parameter.
  tooltip?: string;

  constructor(data: RepositoryParameterAnnouncementModelOptions) {
    super();
    validate(data);
    this.array = data.array;
    this.collectionType = data.collectionType;
    this.itemType = data.itemType;
    this.map = data.map;
    this.name = data.name;
    this.required = data.required;
    this.string = data.string;
    this.title = data.title;
    this.tooltip = data.tooltip;
  }

  static create(data: RepositoryParameterAnnouncementModelOptions): RepositoryParameterAnnouncementModel {
    return new RepositoryParameterAnnouncementModel(data);
  }

  toObject(): Partial<this> {
    return {
      array: this.array,
      collectionType: this.collectionType,
      itemType: this.itemType,
      map: this.map,
      name: this.name,
      required: this.required,
      string: this.string,
      title: this.title,
      tooltip: this.tooltip,
    } as Partial<this>;
  }
}

export default RepositoryParameterAnnouncementModel;

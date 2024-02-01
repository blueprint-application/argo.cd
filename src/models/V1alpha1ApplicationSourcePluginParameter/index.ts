import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourcePluginParameterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourcePluginParameterModel extends BaseModel {
  // Array is the value of an array type parameter.
  array?: Array<string>;
  // Map is the value of a map type parameter.
  map?: { [key: string]: string };
  // Name is the name identifying a parameter.
  name?: string;
  // String_ is the value of a string type parameter.
  string?: string;

  constructor(data: V1alpha1ApplicationSourcePluginParameterModelOptions) {
    super();
    validate(data);
    this.array = data.array;
    this.map = data.map;
    this.name = data.name;
    this.string = data.string;
  }

  static create(
    data: V1alpha1ApplicationSourcePluginParameterModelOptions,
  ): V1alpha1ApplicationSourcePluginParameterModel {
    return new V1alpha1ApplicationSourcePluginParameterModel(data);
  }

  toObject(): Partial<this> {
    return {
      array: this.array,
      map: this.map,
      name: this.name,
      string: this.string,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourcePluginParameterModel;

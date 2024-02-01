import { BaseModel } from '../types';
import type { V1alpha1ResourceIgnoreDifferencesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceIgnoreDifferencesModel extends BaseModel {
  group?: string;
  jqPathExpressions?: Array<string>;
  jsonPointers?: Array<string>;
  kind?: string;
  managedFieldsManagers?: Array<string>;
  name?: string;
  namespace?: string;

  constructor(data: V1alpha1ResourceIgnoreDifferencesModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.jqPathExpressions = data.jqPathExpressions;
    this.jsonPointers = data.jsonPointers;
    this.kind = data.kind;
    this.managedFieldsManagers = data.managedFieldsManagers;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: V1alpha1ResourceIgnoreDifferencesModelOptions): V1alpha1ResourceIgnoreDifferencesModel {
    return new V1alpha1ResourceIgnoreDifferencesModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      jqPathExpressions: this.jqPathExpressions,
      jsonPointers: this.jsonPointers,
      kind: this.kind,
      managedFieldsManagers: this.managedFieldsManagers,
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceIgnoreDifferencesModel;

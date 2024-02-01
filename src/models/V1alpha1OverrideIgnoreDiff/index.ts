import { BaseModel } from '../types';
import type { V1alpha1OverrideIgnoreDiffModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OverrideIgnoreDiffModel extends BaseModel {
  jSONPointers?: Array<string>;
  jqPathExpressions?: Array<string>;
  managedFieldsManagers?: Array<string>;

  constructor(data: V1alpha1OverrideIgnoreDiffModelOptions) {
    super();
    validate(data);
    this.jSONPointers = data.jSONPointers;
    this.jqPathExpressions = data.jqPathExpressions;
    this.managedFieldsManagers = data.managedFieldsManagers;
  }

  static create(data: V1alpha1OverrideIgnoreDiffModelOptions): V1alpha1OverrideIgnoreDiffModel {
    return new V1alpha1OverrideIgnoreDiffModel(data);
  }

  toObject(): Partial<this> {
    return {
      jSONPointers: this.jSONPointers,
      jqPathExpressions: this.jqPathExpressions,
      managedFieldsManagers: this.managedFieldsManagers,
    } as Partial<this>;
  }
}

export default V1alpha1OverrideIgnoreDiffModel;

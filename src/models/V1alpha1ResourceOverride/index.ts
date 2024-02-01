import { V1alpha1KnownTypeFieldModelOptions as V1alpha1KnownTypeField } from '../V1alpha1KnownTypeField';
import { V1alpha1OverrideIgnoreDiffModelOptions as V1alpha1OverrideIgnoreDiff } from '../V1alpha1OverrideIgnoreDiff';
import { BaseModel } from '../types';
import type { V1alpha1ResourceOverrideModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ResourceOverrideModel extends BaseModel {
  actions?: string;
  healthLua?: string;
  ignoreDifferences?: V1alpha1OverrideIgnoreDiff;
  ignoreResourceUpdates?: V1alpha1OverrideIgnoreDiff;
  knownTypeFields?: Array<V1alpha1KnownTypeField>;
  useOpenLibs?: boolean;

  constructor(data: V1alpha1ResourceOverrideModelOptions) {
    super();
    validate(data);
    this.actions = data.actions;
    this.healthLua = data.healthLua;
    this.ignoreDifferences = data.ignoreDifferences;
    this.ignoreResourceUpdates = data.ignoreResourceUpdates;
    this.knownTypeFields = data.knownTypeFields;
    this.useOpenLibs = data.useOpenLibs;
  }

  static create(data: V1alpha1ResourceOverrideModelOptions): V1alpha1ResourceOverrideModel {
    return new V1alpha1ResourceOverrideModel(data);
  }

  toObject(): Partial<this> {
    return {
      actions: this.actions,
      healthLua: this.healthLua,
      ignoreDifferences: this.ignoreDifferences,
      ignoreResourceUpdates: this.ignoreResourceUpdates,
      knownTypeFields: this.knownTypeFields,
      useOpenLibs: this.useOpenLibs,
    } as Partial<this>;
  }
}

export default V1alpha1ResourceOverrideModel;

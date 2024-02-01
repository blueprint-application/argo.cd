import { RuntimeRawExtensionModelOptions as RuntimeRawExtension } from '../RuntimeRawExtension';
import { V1alpha1HelmFileParameterModelOptions as V1alpha1HelmFileParameter } from '../V1alpha1HelmFileParameter';
import { V1alpha1HelmParameterModelOptions as V1alpha1HelmParameter } from '../V1alpha1HelmParameter';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourceHelmModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourceHelmModel extends BaseModel {
  fileParameters?: Array<V1alpha1HelmFileParameter>;
  ignoreMissingValueFiles?: boolean;
  parameters?: Array<V1alpha1HelmParameter>;
  passCredentials?: boolean;
  releaseName?: string;
  skipCrds?: boolean;
  valueFiles?: Array<string>;
  values?: string;
  valuesObject?: RuntimeRawExtension;
  version?: string;

  constructor(data: V1alpha1ApplicationSourceHelmModelOptions) {
    super();
    validate(data);
    this.fileParameters = data.fileParameters;
    this.ignoreMissingValueFiles = data.ignoreMissingValueFiles;
    this.parameters = data.parameters;
    this.passCredentials = data.passCredentials;
    this.releaseName = data.releaseName;
    this.skipCrds = data.skipCrds;
    this.valueFiles = data.valueFiles;
    this.values = data.values;
    this.valuesObject = data.valuesObject;
    this.version = data.version;
  }

  static create(data: V1alpha1ApplicationSourceHelmModelOptions): V1alpha1ApplicationSourceHelmModel {
    return new V1alpha1ApplicationSourceHelmModel(data);
  }

  toObject(): Partial<this> {
    return {
      fileParameters: this.fileParameters,
      ignoreMissingValueFiles: this.ignoreMissingValueFiles,
      parameters: this.parameters,
      passCredentials: this.passCredentials,
      releaseName: this.releaseName,
      skipCrds: this.skipCrds,
      valueFiles: this.valueFiles,
      values: this.values,
      valuesObject: this.valuesObject,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourceHelmModel;

import { V1alpha1HelmFileParameterModelOptions as V1alpha1HelmFileParameter } from '../V1alpha1HelmFileParameter';
import { V1alpha1HelmParameterModelOptions as V1alpha1HelmParameter } from '../V1alpha1HelmParameter';
import { BaseModel } from '../types';
import type { RepositoryHelmAppSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryHelmAppSpecModel extends BaseModel {
  fileParameters?: Array<V1alpha1HelmFileParameter>;
  name?: string;
  parameters?: Array<V1alpha1HelmParameter>;
  valueFiles?: Array<string>;
  values?: string;

  constructor(data: RepositoryHelmAppSpecModelOptions) {
    super();
    validate(data);
    this.fileParameters = data.fileParameters;
    this.name = data.name;
    this.parameters = data.parameters;
    this.valueFiles = data.valueFiles;
    this.values = data.values;
  }

  static create(data: RepositoryHelmAppSpecModelOptions): RepositoryHelmAppSpecModel {
    return new RepositoryHelmAppSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      fileParameters: this.fileParameters,
      name: this.name,
      parameters: this.parameters,
      valueFiles: this.valueFiles,
      values: this.values,
    } as Partial<this>;
  }
}

export default RepositoryHelmAppSpecModel;

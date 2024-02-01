import { V1alpha1ApplicationSetTemplateModelOptions as V1alpha1ApplicationSetTemplate } from '../V1alpha1ApplicationSetTemplate';
import { V1alpha1GitDirectoryGeneratorItemModelOptions as V1alpha1GitDirectoryGeneratorItem } from '../V1alpha1GitDirectoryGeneratorItem';
import { V1alpha1GitFileGeneratorItemModelOptions as V1alpha1GitFileGeneratorItem } from '../V1alpha1GitFileGeneratorItem';
import { BaseModel } from '../types';
import type { V1alpha1GitGeneratorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1GitGeneratorModel extends BaseModel {
  directories?: Array<V1alpha1GitDirectoryGeneratorItem>;
  files?: Array<V1alpha1GitFileGeneratorItem>;
  pathParamPrefix?: string;
  repoURL?: string;
  requeueAfterSeconds?: string;
  revision?: string;
  template?: V1alpha1ApplicationSetTemplate;
  values?: { [key: string]: string };

  constructor(data: V1alpha1GitGeneratorModelOptions) {
    super();
    validate(data);
    this.directories = data.directories;
    this.files = data.files;
    this.pathParamPrefix = data.pathParamPrefix;
    this.repoURL = data.repoURL;
    this.requeueAfterSeconds = data.requeueAfterSeconds;
    this.revision = data.revision;
    this.template = data.template;
    this.values = data.values;
  }

  static create(data: V1alpha1GitGeneratorModelOptions): V1alpha1GitGeneratorModel {
    return new V1alpha1GitGeneratorModel(data);
  }

  toObject(): Partial<this> {
    return {
      directories: this.directories,
      files: this.files,
      pathParamPrefix: this.pathParamPrefix,
      repoURL: this.repoURL,
      requeueAfterSeconds: this.requeueAfterSeconds,
      revision: this.revision,
      template: this.template,
      values: this.values,
    } as Partial<this>;
  }
}

export default V1alpha1GitGeneratorModel;

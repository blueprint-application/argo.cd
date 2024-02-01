import { V1alpha1ApplicationSourceJsonnetModelOptions as V1alpha1ApplicationSourceJsonnet } from '../V1alpha1ApplicationSourceJsonnet';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourceDirectoryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourceDirectoryModel extends BaseModel {
  exclude?: string;
  include?: string;
  jsonnet?: V1alpha1ApplicationSourceJsonnet;
  recurse?: boolean;

  constructor(data: V1alpha1ApplicationSourceDirectoryModelOptions) {
    super();
    validate(data);
    this.exclude = data.exclude;
    this.include = data.include;
    this.jsonnet = data.jsonnet;
    this.recurse = data.recurse;
  }

  static create(data: V1alpha1ApplicationSourceDirectoryModelOptions): V1alpha1ApplicationSourceDirectoryModel {
    return new V1alpha1ApplicationSourceDirectoryModel(data);
  }

  toObject(): Partial<this> {
    return {
      exclude: this.exclude,
      include: this.include,
      jsonnet: this.jsonnet,
      recurse: this.recurse,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourceDirectoryModel;

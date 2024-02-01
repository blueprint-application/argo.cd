import { BaseModel } from '../types';
import type { V1alpha1GitDirectoryGeneratorItemModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1GitDirectoryGeneratorItemModel extends BaseModel {
  exclude?: boolean;
  path?: string;

  constructor(data: V1alpha1GitDirectoryGeneratorItemModelOptions) {
    super();
    validate(data);
    this.exclude = data.exclude;
    this.path = data.path;
  }

  static create(data: V1alpha1GitDirectoryGeneratorItemModelOptions): V1alpha1GitDirectoryGeneratorItemModel {
    return new V1alpha1GitDirectoryGeneratorItemModel(data);
  }

  toObject(): Partial<this> {
    return {
      exclude: this.exclude,
      path: this.path,
    } as Partial<this>;
  }
}

export default V1alpha1GitDirectoryGeneratorItemModel;

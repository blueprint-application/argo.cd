import { BaseModel } from '../types';
import type { V1alpha1KustomizeOptionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1KustomizeOptionsModel extends BaseModel {
  binaryPath?: string;
  buildOptions?: string;

  constructor(data: V1alpha1KustomizeOptionsModelOptions) {
    super();
    validate(data);
    this.binaryPath = data.binaryPath;
    this.buildOptions = data.buildOptions;
  }

  static create(data: V1alpha1KustomizeOptionsModelOptions): V1alpha1KustomizeOptionsModel {
    return new V1alpha1KustomizeOptionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      binaryPath: this.binaryPath,
      buildOptions: this.buildOptions,
    } as Partial<this>;
  }
}

export default V1alpha1KustomizeOptionsModel;

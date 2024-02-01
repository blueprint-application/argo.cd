import { BaseModel } from '../types';
import type { V1alpha1GitFileGeneratorItemModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1GitFileGeneratorItemModel extends BaseModel {
  path?: string;

  constructor(data: V1alpha1GitFileGeneratorItemModelOptions) {
    super();
    validate(data);
    this.path = data.path;
  }

  static create(data: V1alpha1GitFileGeneratorItemModelOptions): V1alpha1GitFileGeneratorItemModel {
    return new V1alpha1GitFileGeneratorItemModel(data);
  }

  toObject(): Partial<this> {
    return {
      path: this.path,
    } as Partial<this>;
  }
}

export default V1alpha1GitFileGeneratorItemModel;

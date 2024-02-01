import { BaseModel } from '../types';
import type { RepositoryKustomizeAppSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryKustomizeAppSpecModel extends BaseModel {
  // images is a list of available images.
  images?: Array<string>;

  constructor(data: RepositoryKustomizeAppSpecModelOptions) {
    super();
    validate(data);
    this.images = data.images;
  }

  static create(data: RepositoryKustomizeAppSpecModelOptions): RepositoryKustomizeAppSpecModel {
    return new RepositoryKustomizeAppSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      images: this.images,
    } as Partial<this>;
  }
}

export default RepositoryKustomizeAppSpecModel;

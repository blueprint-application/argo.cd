import { BaseModel } from '../types';
import type { RepositoryRefsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryRefsModel extends BaseModel {
  branches?: Array<string>;
  tags?: Array<string>;

  constructor(data: RepositoryRefsModelOptions) {
    super();
    validate(data);
    this.branches = data.branches;
    this.tags = data.tags;
  }

  static create(data: RepositoryRefsModelOptions): RepositoryRefsModel {
    return new RepositoryRefsModel(data);
  }

  toObject(): Partial<this> {
    return {
      branches: this.branches,
      tags: this.tags,
    } as Partial<this>;
  }
}

export default RepositoryRefsModel;

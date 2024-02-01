import { BaseModel } from '../types';
import type { RepositoryAppInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryAppInfoModel extends BaseModel {
  path?: string;
  type?: string;

  constructor(data: RepositoryAppInfoModelOptions) {
    super();
    validate(data);
    this.path = data.path;
    this.type = data.type;
  }

  static create(data: RepositoryAppInfoModelOptions): RepositoryAppInfoModel {
    return new RepositoryAppInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      path: this.path,
      type: this.type,
    } as Partial<this>;
  }
}

export default RepositoryAppInfoModel;

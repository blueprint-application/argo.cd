import { RepositoryAppInfoModelOptions as RepositoryAppInfo } from '../RepositoryAppInfo';
import { BaseModel } from '../types';
import type { RepositoryRepoAppsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryRepoAppsResponseModel extends BaseModel {
  items?: Array<RepositoryAppInfo>;

  constructor(data: RepositoryRepoAppsResponseModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: RepositoryRepoAppsResponseModelOptions): RepositoryRepoAppsResponseModel {
    return new RepositoryRepoAppsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default RepositoryRepoAppsResponseModel;

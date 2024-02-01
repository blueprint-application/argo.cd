import { BaseModel } from '../types';
import type { ApplicationSyncOptionsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationSyncOptionsModel extends BaseModel {
  items?: Array<string>;

  constructor(data: ApplicationSyncOptionsModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: ApplicationSyncOptionsModelOptions): ApplicationSyncOptionsModel {
    return new ApplicationSyncOptionsModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default ApplicationSyncOptionsModel;

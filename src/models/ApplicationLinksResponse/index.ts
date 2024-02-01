import { ApplicationLinkInfoModelOptions as ApplicationLinkInfo } from '../ApplicationLinkInfo';
import { BaseModel } from '../types';
import type { ApplicationLinksResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationLinksResponseModel extends BaseModel {
  items?: Array<ApplicationLinkInfo>;

  constructor(data: ApplicationLinksResponseModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: ApplicationLinksResponseModelOptions): ApplicationLinksResponseModel {
    return new ApplicationLinksResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default ApplicationLinksResponseModel;

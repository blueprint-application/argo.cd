import { BaseModel } from '../types';
import type { ApplicationLinkInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationLinkInfoModel extends BaseModel {
  description?: string;
  iconClass?: string;
  title?: string;
  url?: string;

  constructor(data: ApplicationLinkInfoModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.iconClass = data.iconClass;
    this.title = data.title;
    this.url = data.url;
  }

  static create(data: ApplicationLinkInfoModelOptions): ApplicationLinkInfoModel {
    return new ApplicationLinkInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      iconClass: this.iconClass,
      title: this.title,
      url: this.url,
    } as Partial<this>;
  }
}

export default ApplicationLinkInfoModel;

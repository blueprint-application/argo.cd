import { BaseModel } from '../types';
import type { NotificationTemplateModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationTemplateModel extends BaseModel {
  name?: string;

  constructor(data: NotificationTemplateModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: NotificationTemplateModelOptions): NotificationTemplateModel {
    return new NotificationTemplateModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default NotificationTemplateModel;

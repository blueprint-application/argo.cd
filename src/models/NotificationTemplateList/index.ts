import { NotificationTemplateModelOptions as NotificationTemplate } from '../NotificationTemplate';
import { BaseModel } from '../types';
import type { NotificationTemplateListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationTemplateListModel extends BaseModel {
  items?: Array<NotificationTemplate>;

  constructor(data: NotificationTemplateListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: NotificationTemplateListModelOptions): NotificationTemplateListModel {
    return new NotificationTemplateListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default NotificationTemplateListModel;

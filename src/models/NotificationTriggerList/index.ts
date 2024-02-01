import { NotificationTriggerModelOptions as NotificationTrigger } from '../NotificationTrigger';
import { BaseModel } from '../types';
import type { NotificationTriggerListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationTriggerListModel extends BaseModel {
  items?: Array<NotificationTrigger>;

  constructor(data: NotificationTriggerListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: NotificationTriggerListModelOptions): NotificationTriggerListModel {
    return new NotificationTriggerListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default NotificationTriggerListModel;

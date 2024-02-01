import { NotificationServiceModelOptions as NotificationService } from '../NotificationService';
import { BaseModel } from '../types';
import type { NotificationServiceListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationServiceListModel extends BaseModel {
  items?: Array<NotificationService>;

  constructor(data: NotificationServiceListModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: NotificationServiceListModelOptions): NotificationServiceListModel {
    return new NotificationServiceListModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default NotificationServiceListModel;

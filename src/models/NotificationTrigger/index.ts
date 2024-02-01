import { BaseModel } from '../types';
import type { NotificationTriggerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationTriggerModel extends BaseModel {
  name?: string;

  constructor(data: NotificationTriggerModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: NotificationTriggerModelOptions): NotificationTriggerModel {
    return new NotificationTriggerModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default NotificationTriggerModel;

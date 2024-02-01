import { BaseModel } from '../types';
import type { NotificationServiceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class NotificationServiceModel extends BaseModel {
  name?: string;

  constructor(data: NotificationServiceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: NotificationServiceModelOptions): NotificationServiceModel {
    return new NotificationServiceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default NotificationServiceModel;

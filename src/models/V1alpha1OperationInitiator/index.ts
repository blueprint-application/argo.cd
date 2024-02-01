import { BaseModel } from '../types';
import type { V1alpha1OperationInitiatorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1OperationInitiatorModel extends BaseModel {
  // Automated is set to true if operation was initiated automatically by the application controller.
  automated?: boolean;
  username?: string;

  constructor(data: V1alpha1OperationInitiatorModelOptions) {
    super();
    validate(data);
    this.automated = data.automated;
    this.username = data.username;
  }

  static create(data: V1alpha1OperationInitiatorModelOptions): V1alpha1OperationInitiatorModel {
    return new V1alpha1OperationInitiatorModel(data);
  }

  toObject(): Partial<this> {
    return {
      automated: this.automated,
      username: this.username,
    } as Partial<this>;
  }
}

export default V1alpha1OperationInitiatorModel;

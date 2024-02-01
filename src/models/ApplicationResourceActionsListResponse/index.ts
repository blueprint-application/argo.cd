import { V1alpha1ResourceActionModelOptions as V1alpha1ResourceAction } from '../V1alpha1ResourceAction';
import { BaseModel } from '../types';
import type { ApplicationResourceActionsListResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationResourceActionsListResponseModel extends BaseModel {
  actions?: Array<V1alpha1ResourceAction>;

  constructor(data: ApplicationResourceActionsListResponseModelOptions) {
    super();
    validate(data);
    this.actions = data.actions;
  }

  static create(data: ApplicationResourceActionsListResponseModelOptions): ApplicationResourceActionsListResponseModel {
    return new ApplicationResourceActionsListResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      actions: this.actions,
    } as Partial<this>;
  }
}

export default ApplicationResourceActionsListResponseModel;

import { ApplicationApplicationSyncWindowModelOptions as ApplicationApplicationSyncWindow } from '../ApplicationApplicationSyncWindow';
import { BaseModel } from '../types';
import type { ApplicationApplicationSyncWindowsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationSyncWindowsResponseModel extends BaseModel {
  activeWindows?: Array<ApplicationApplicationSyncWindow>;
  assignedWindows?: Array<ApplicationApplicationSyncWindow>;
  canSync?: boolean;

  constructor(data: ApplicationApplicationSyncWindowsResponseModelOptions) {
    super();
    validate(data);
    this.activeWindows = data.activeWindows;
    this.assignedWindows = data.assignedWindows;
    this.canSync = data.canSync;
  }

  static create(
    data: ApplicationApplicationSyncWindowsResponseModelOptions,
  ): ApplicationApplicationSyncWindowsResponseModel {
    return new ApplicationApplicationSyncWindowsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      activeWindows: this.activeWindows,
      assignedWindows: this.assignedWindows,
      canSync: this.canSync,
    } as Partial<this>;
  }
}

export default ApplicationApplicationSyncWindowsResponseModel;

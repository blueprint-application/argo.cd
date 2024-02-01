import { ApplicationApplicationSyncWindowModelOptions as ApplicationApplicationSyncWindow } from '../ApplicationApplicationSyncWindow';

export interface ApplicationApplicationSyncWindowsResponseModelOptions {
  activeWindows?: Array<ApplicationApplicationSyncWindow>;
  assignedWindows?: Array<ApplicationApplicationSyncWindow>;
  canSync?: boolean;
}

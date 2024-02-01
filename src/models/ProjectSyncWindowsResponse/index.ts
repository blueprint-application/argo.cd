import { V1alpha1SyncWindowModelOptions as V1alpha1SyncWindow } from '../V1alpha1SyncWindow';
import { BaseModel } from '../types';
import type { ProjectSyncWindowsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectSyncWindowsResponseModel extends BaseModel {
  windows?: Array<V1alpha1SyncWindow>;

  constructor(data: ProjectSyncWindowsResponseModelOptions) {
    super();
    validate(data);
    this.windows = data.windows;
  }

  static create(data: ProjectSyncWindowsResponseModelOptions): ProjectSyncWindowsResponseModel {
    return new ProjectSyncWindowsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      windows: this.windows,
    } as Partial<this>;
  }
}

export default ProjectSyncWindowsResponseModel;

import { BaseModel } from '../types';
import type { ApplicationApplicationManifestQueryWithFilesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationManifestQueryWithFilesModel extends BaseModel {
  appNamespace?: string;
  checksum?: string;
  name?: string;
  project?: string;

  constructor(data: ApplicationApplicationManifestQueryWithFilesModelOptions) {
    super();
    validate(data);
    this.appNamespace = data.appNamespace;
    this.checksum = data.checksum;
    this.name = data.name;
    this.project = data.project;
  }

  static create(
    data: ApplicationApplicationManifestQueryWithFilesModelOptions,
  ): ApplicationApplicationManifestQueryWithFilesModel {
    return new ApplicationApplicationManifestQueryWithFilesModel(data);
  }

  toObject(): Partial<this> {
    return {
      appNamespace: this.appNamespace,
      checksum: this.checksum,
      name: this.name,
      project: this.project,
    } as Partial<this>;
  }
}

export default ApplicationApplicationManifestQueryWithFilesModel;

import { RepositoryParameterAnnouncementModelOptions as RepositoryParameterAnnouncement } from '../RepositoryParameterAnnouncement';
import { BaseModel } from '../types';
import type { RepositoryPluginAppSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryPluginAppSpecModel extends BaseModel {
  parametersAnnouncement?: Array<RepositoryParameterAnnouncement>;

  constructor(data: RepositoryPluginAppSpecModelOptions) {
    super();
    validate(data);
    this.parametersAnnouncement = data.parametersAnnouncement;
  }

  static create(data: RepositoryPluginAppSpecModelOptions): RepositoryPluginAppSpecModel {
    return new RepositoryPluginAppSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      parametersAnnouncement: this.parametersAnnouncement,
    } as Partial<this>;
  }
}

export default RepositoryPluginAppSpecModel;

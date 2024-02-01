import { BaseModel } from '../types';
import type { ProjectProjectTokenResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectProjectTokenResponseModel extends BaseModel {
  token?: string;

  constructor(data: ProjectProjectTokenResponseModelOptions) {
    super();
    validate(data);
    this.token = data.token;
  }

  static create(data: ProjectProjectTokenResponseModelOptions): ProjectProjectTokenResponseModel {
    return new ProjectProjectTokenResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      token: this.token,
    } as Partial<this>;
  }
}

export default ProjectProjectTokenResponseModel;

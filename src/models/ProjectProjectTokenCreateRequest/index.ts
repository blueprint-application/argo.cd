import { BaseModel } from '../types';
import type { ProjectProjectTokenCreateRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ProjectProjectTokenCreateRequestModel extends BaseModel {
  description?: string;
  expiresIn?: string;
  id?: string;
  project?: string;
  role?: string;

  constructor(data: ProjectProjectTokenCreateRequestModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.expiresIn = data.expiresIn;
    this.id = data.id;
    this.project = data.project;
    this.role = data.role;
  }

  static create(data: ProjectProjectTokenCreateRequestModelOptions): ProjectProjectTokenCreateRequestModel {
    return new ProjectProjectTokenCreateRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      expiresIn: this.expiresIn,
      id: this.id,
      project: this.project,
      role: this.role,
    } as Partial<this>;
  }
}

export default ProjectProjectTokenCreateRequestModel;

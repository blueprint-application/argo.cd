import { BaseModel } from '../types';
import type { ApplicationApplicationResourceResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationResourceResponseModel extends BaseModel {
  manifest?: string;

  constructor(data: ApplicationApplicationResourceResponseModelOptions) {
    super();
    validate(data);
    this.manifest = data.manifest;
  }

  static create(data: ApplicationApplicationResourceResponseModelOptions): ApplicationApplicationResourceResponseModel {
    return new ApplicationApplicationResourceResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      manifest: this.manifest,
    } as Partial<this>;
  }
}

export default ApplicationApplicationResourceResponseModel;

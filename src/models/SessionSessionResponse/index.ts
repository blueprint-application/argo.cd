import { BaseModel } from '../types';
import type { SessionSessionResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class SessionSessionResponseModel extends BaseModel {
  token?: string;

  constructor(data: SessionSessionResponseModelOptions) {
    super();
    validate(data);
    this.token = data.token;
  }

  static create(data: SessionSessionResponseModelOptions): SessionSessionResponseModel {
    return new SessionSessionResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      token: this.token,
    } as Partial<this>;
  }
}

export default SessionSessionResponseModel;

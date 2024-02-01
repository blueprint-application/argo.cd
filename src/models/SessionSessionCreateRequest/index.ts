import { BaseModel } from '../types';
import type { SessionSessionCreateRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class SessionSessionCreateRequestModel extends BaseModel {
  password?: string;
  token?: string;
  username?: string;

  constructor(data: SessionSessionCreateRequestModelOptions) {
    super();
    validate(data);
    this.password = data.password;
    this.token = data.token;
    this.username = data.username;
  }

  static create(data: SessionSessionCreateRequestModelOptions): SessionSessionCreateRequestModel {
    return new SessionSessionCreateRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      password: this.password,
      token: this.token,
      username: this.username,
    } as Partial<this>;
  }
}

export default SessionSessionCreateRequestModel;

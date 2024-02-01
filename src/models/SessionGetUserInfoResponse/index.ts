import { BaseModel } from '../types';
import type { SessionGetUserInfoResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class SessionGetUserInfoResponseModel extends BaseModel {
  groups?: Array<string>;
  iss?: string;
  loggedIn?: boolean;
  username?: string;

  constructor(data: SessionGetUserInfoResponseModelOptions) {
    super();
    validate(data);
    this.groups = data.groups;
    this.iss = data.iss;
    this.loggedIn = data.loggedIn;
    this.username = data.username;
  }

  static create(data: SessionGetUserInfoResponseModelOptions): SessionGetUserInfoResponseModel {
    return new SessionGetUserInfoResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      groups: this.groups,
      iss: this.iss,
      loggedIn: this.loggedIn,
      username: this.username,
    } as Partial<this>;
  }
}

export default SessionGetUserInfoResponseModel;

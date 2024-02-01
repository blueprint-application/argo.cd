import { BaseModel } from '../types';
import type { V1alpha1ExecProviderConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ExecProviderConfigModel extends BaseModel {
  apiVersion?: string;
  args?: Array<string>;
  command?: string;
  env?: { [key: string]: string };
  installHint?: string;

  constructor(data: V1alpha1ExecProviderConfigModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.args = data.args;
    this.command = data.command;
    this.env = data.env;
    this.installHint = data.installHint;
  }

  static create(data: V1alpha1ExecProviderConfigModelOptions): V1alpha1ExecProviderConfigModel {
    return new V1alpha1ExecProviderConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      args: this.args,
      command: this.command,
      env: this.env,
      installHint: this.installHint,
    } as Partial<this>;
  }
}

export default V1alpha1ExecProviderConfigModel;

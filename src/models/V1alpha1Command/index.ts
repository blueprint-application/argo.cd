import { BaseModel } from '../types';
import type { V1alpha1CommandModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1CommandModel extends BaseModel {
  args?: Array<string>;
  command?: Array<string>;

  constructor(data: V1alpha1CommandModelOptions) {
    super();
    validate(data);
    this.args = data.args;
    this.command = data.command;
  }

  static create(data: V1alpha1CommandModelOptions): V1alpha1CommandModel {
    return new V1alpha1CommandModel(data);
  }

  toObject(): Partial<this> {
    return {
      args: this.args,
      command: this.command,
    } as Partial<this>;
  }
}

export default V1alpha1CommandModel;

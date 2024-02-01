import { BaseModel } from '../types';
import type { V1EventSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1EventSourceModel extends BaseModel {
  component?: string;
  host?: string;

  constructor(data: V1EventSourceModelOptions) {
    super();
    validate(data);
    this.component = data.component;
    this.host = data.host;
  }

  static create(data: V1EventSourceModelOptions): V1EventSourceModel {
    return new V1EventSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      component: this.component,
      host: this.host,
    } as Partial<this>;
  }
}

export default V1EventSourceModel;

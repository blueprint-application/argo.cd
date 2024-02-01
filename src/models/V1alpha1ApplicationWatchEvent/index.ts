import { V1alpha1ApplicationModelOptions as V1alpha1Application } from '../V1alpha1Application';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationWatchEventModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationWatchEventModel extends BaseModel {
  application?: V1alpha1Application;
  type?: string;

  constructor(data: V1alpha1ApplicationWatchEventModelOptions) {
    super();
    validate(data);
    this.application = data.application;
    this.type = data.type;
  }

  static create(data: V1alpha1ApplicationWatchEventModelOptions): V1alpha1ApplicationWatchEventModel {
    return new V1alpha1ApplicationWatchEventModel(data);
  }

  toObject(): Partial<this> {
    return {
      application: this.application,
      type: this.type,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationWatchEventModel;

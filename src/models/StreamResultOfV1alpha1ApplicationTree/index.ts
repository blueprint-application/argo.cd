import { RuntimeStreamErrorModelOptions as RuntimeStreamError } from '../RuntimeStreamError';
import { V1alpha1ApplicationTreeModelOptions as V1alpha1ApplicationTree } from '../V1alpha1ApplicationTree';
import { BaseModel } from '../types';
import type { StreamResultOfV1alpha1ApplicationTreeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class StreamResultOfV1alpha1ApplicationTreeModel extends BaseModel {
  error?: RuntimeStreamError;
  result?: V1alpha1ApplicationTree;

  constructor(data: StreamResultOfV1alpha1ApplicationTreeModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.result = data.result;
  }

  static create(data: StreamResultOfV1alpha1ApplicationTreeModelOptions): StreamResultOfV1alpha1ApplicationTreeModel {
    return new StreamResultOfV1alpha1ApplicationTreeModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      result: this.result,
    } as Partial<this>;
  }
}

export default StreamResultOfV1alpha1ApplicationTreeModel;

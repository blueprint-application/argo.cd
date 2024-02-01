import { BaseModel } from '../types';
import type { ApplicationFileChunkModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationFileChunkModel extends BaseModel {
  chunk?: string;

  constructor(data: ApplicationFileChunkModelOptions) {
    super();
    validate(data);
    this.chunk = data.chunk;
  }

  static create(data: ApplicationFileChunkModelOptions): ApplicationFileChunkModel {
    return new ApplicationFileChunkModel(data);
  }

  toObject(): Partial<this> {
    return {
      chunk: this.chunk,
    } as Partial<this>;
  }
}

export default ApplicationFileChunkModel;

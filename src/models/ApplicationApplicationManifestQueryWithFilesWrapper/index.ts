import { ApplicationApplicationManifestQueryWithFilesModelOptions as ApplicationApplicationManifestQueryWithFiles } from '../ApplicationApplicationManifestQueryWithFiles';
import { ApplicationFileChunkModelOptions as ApplicationFileChunk } from '../ApplicationFileChunk';
import { BaseModel } from '../types';
import type { ApplicationApplicationManifestQueryWithFilesWrapperModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationApplicationManifestQueryWithFilesWrapperModel extends BaseModel {
  chunk?: ApplicationFileChunk;
  query?: ApplicationApplicationManifestQueryWithFiles;

  constructor(data: ApplicationApplicationManifestQueryWithFilesWrapperModelOptions) {
    super();
    validate(data);
    this.chunk = data.chunk;
    this.query = data.query;
  }

  static create(
    data: ApplicationApplicationManifestQueryWithFilesWrapperModelOptions,
  ): ApplicationApplicationManifestQueryWithFilesWrapperModel {
    return new ApplicationApplicationManifestQueryWithFilesWrapperModel(data);
  }

  toObject(): Partial<this> {
    return {
      chunk: this.chunk,
      query: this.query,
    } as Partial<this>;
  }
}

export default ApplicationApplicationManifestQueryWithFilesWrapperModel;

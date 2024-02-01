import { BaseModel } from '../types';
import type { RepositoryManifestResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryManifestResponseModel extends BaseModel {
  manifests?: Array<string>;
  namespace?: string;
  revision?: string;
  server?: string;
  sourceType?: string;
  verifyResult?: string;

  constructor(data: RepositoryManifestResponseModelOptions) {
    super();
    validate(data);
    this.manifests = data.manifests;
    this.namespace = data.namespace;
    this.revision = data.revision;
    this.server = data.server;
    this.sourceType = data.sourceType;
    this.verifyResult = data.verifyResult;
  }

  static create(data: RepositoryManifestResponseModelOptions): RepositoryManifestResponseModel {
    return new RepositoryManifestResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      manifests: this.manifests,
      namespace: this.namespace,
      revision: this.revision,
      server: this.server,
      sourceType: this.sourceType,
      verifyResult: this.verifyResult,
    } as Partial<this>;
  }
}

export default RepositoryManifestResponseModel;

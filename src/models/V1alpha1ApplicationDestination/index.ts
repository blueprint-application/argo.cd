import { BaseModel } from '../types';
import type { V1alpha1ApplicationDestinationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationDestinationModel extends BaseModel {
  // Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set.
  name?: string;
  namespace?: string;
  // Server specifies the URL of the target cluster\'s Kubernetes control plane API. This must be set if Name is not set.
  server?: string;

  constructor(data: V1alpha1ApplicationDestinationModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
    this.server = data.server;
  }

  static create(data: V1alpha1ApplicationDestinationModelOptions): V1alpha1ApplicationDestinationModel {
    return new V1alpha1ApplicationDestinationModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
      server: this.server,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationDestinationModel;

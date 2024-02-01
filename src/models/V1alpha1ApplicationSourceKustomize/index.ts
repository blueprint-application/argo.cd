import { V1alpha1KustomizeReplicaModelOptions as V1alpha1KustomizeReplica } from '../V1alpha1KustomizeReplica';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourceKustomizeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourceKustomizeModel extends BaseModel {
  commonAnnotations?: { [key: string]: string };
  commonAnnotationsEnvsubst?: boolean;
  commonLabels?: { [key: string]: string };
  forceCommonAnnotations?: boolean;
  forceCommonLabels?: boolean;
  images?: Array<string>;
  namePrefix?: string;
  nameSuffix?: string;
  namespace?: string;
  replicas?: Array<V1alpha1KustomizeReplica>;
  version?: string;

  constructor(data: V1alpha1ApplicationSourceKustomizeModelOptions) {
    super();
    validate(data);
    this.commonAnnotations = data.commonAnnotations;
    this.commonAnnotationsEnvsubst = data.commonAnnotationsEnvsubst;
    this.commonLabels = data.commonLabels;
    this.forceCommonAnnotations = data.forceCommonAnnotations;
    this.forceCommonLabels = data.forceCommonLabels;
    this.images = data.images;
    this.namePrefix = data.namePrefix;
    this.nameSuffix = data.nameSuffix;
    this.namespace = data.namespace;
    this.replicas = data.replicas;
    this.version = data.version;
  }

  static create(data: V1alpha1ApplicationSourceKustomizeModelOptions): V1alpha1ApplicationSourceKustomizeModel {
    return new V1alpha1ApplicationSourceKustomizeModel(data);
  }

  toObject(): Partial<this> {
    return {
      commonAnnotations: this.commonAnnotations,
      commonAnnotationsEnvsubst: this.commonAnnotationsEnvsubst,
      commonLabels: this.commonLabels,
      forceCommonAnnotations: this.forceCommonAnnotations,
      forceCommonLabels: this.forceCommonLabels,
      images: this.images,
      namePrefix: this.namePrefix,
      nameSuffix: this.nameSuffix,
      namespace: this.namespace,
      replicas: this.replicas,
      version: this.version,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourceKustomizeModel;

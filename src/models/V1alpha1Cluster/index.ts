import { V1alpha1ClusterConfigModelOptions as V1alpha1ClusterConfig } from '../V1alpha1ClusterConfig';
import { V1alpha1ClusterInfoModelOptions as V1alpha1ClusterInfo } from '../V1alpha1ClusterInfo';
import { V1alpha1ConnectionStateModelOptions as V1alpha1ConnectionState } from '../V1alpha1ConnectionState';
import { BaseModel } from '../types';
import type { V1alpha1ClusterModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ClusterModel extends BaseModel {
  annotations?: { [key: string]: string };
  // Indicates if cluster level resources should be managed. This setting is used only if cluster is connected in a namespaced mode.
  clusterResources?: boolean;
  config?: V1alpha1ClusterConfig;
  connectionState?: V1alpha1ConnectionState;
  info?: V1alpha1ClusterInfo;
  labels?: { [key: string]: string };
  name?: string;
  // Holds list of namespaces which are accessible in that cluster. Cluster level resources will be ignored if namespace list is not empty.
  namespaces?: Array<string>;
  project?: string;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.  +protobuf.options.marshal=false +protobuf.as=Timestamp +protobuf.options.(gogoproto.goproto_stringer)=false
  refreshRequestedAt?: Date;
  server?: string;
  serverVersion?: string;
  // Shard contains optional shard number. Calculated on the fly by the application controller if not specified.
  shard?: string;

  constructor(data: V1alpha1ClusterModelOptions) {
    super();
    validate(data);
    this.annotations = data.annotations;
    this.clusterResources = data.clusterResources;
    this.config = data.config;
    this.connectionState = data.connectionState;
    this.info = data.info;
    this.labels = data.labels;
    this.name = data.name;
    this.namespaces = data.namespaces;
    this.project = data.project;
    this.refreshRequestedAt = data.refreshRequestedAt;
    this.server = data.server;
    this.serverVersion = data.serverVersion;
    this.shard = data.shard;
  }

  static create(data: V1alpha1ClusterModelOptions): V1alpha1ClusterModel {
    return new V1alpha1ClusterModel(data);
  }

  toObject(): Partial<this> {
    return {
      annotations: this.annotations,
      clusterResources: this.clusterResources,
      config: this.config,
      connectionState: this.connectionState,
      info: this.info,
      labels: this.labels,
      name: this.name,
      namespaces: this.namespaces,
      project: this.project,
      refreshRequestedAt: this.refreshRequestedAt,
      server: this.server,
      serverVersion: this.serverVersion,
      shard: this.shard,
    } as Partial<this>;
  }
}

export default V1alpha1ClusterModel;

import { V1alpha1HostInfoModelOptions as V1alpha1HostInfo } from '../V1alpha1HostInfo';
import { V1alpha1ResourceNodeModelOptions as V1alpha1ResourceNode } from '../V1alpha1ResourceNode';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationTreeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationTreeModel extends BaseModel {
  hosts?: Array<V1alpha1HostInfo>;
  // Nodes contains list of nodes which either directly managed by the application and children of directly managed nodes.
  nodes?: Array<V1alpha1ResourceNode>;
  // OrphanedNodes contains if or orphaned nodes: nodes which are not managed by the app but in the same namespace. List is populated only if orphaned resources enabled in app project.
  orphanedNodes?: Array<V1alpha1ResourceNode>;

  constructor(data: V1alpha1ApplicationTreeModelOptions) {
    super();
    validate(data);
    this.hosts = data.hosts;
    this.nodes = data.nodes;
    this.orphanedNodes = data.orphanedNodes;
  }

  static create(data: V1alpha1ApplicationTreeModelOptions): V1alpha1ApplicationTreeModel {
    return new V1alpha1ApplicationTreeModel(data);
  }

  toObject(): Partial<this> {
    return {
      hosts: this.hosts,
      nodes: this.nodes,
      orphanedNodes: this.orphanedNodes,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationTreeModel;

import { V1ManagedFieldsEntryModelOptions as V1ManagedFieldsEntry } from '../V1ManagedFieldsEntry';
import { V1OwnerReferenceModelOptions as V1OwnerReference } from '../V1OwnerReference';

export interface V1ObjectMetaModelOptions {
  annotations?: { [key: string]: string };
  clusterName?: string;
  creationTimestamp?: Date;
  deletionGracePeriodSeconds?: string;
  deletionTimestamp?: Date;
  finalizers?: Array<string>;
  generateName?: string;
  generation?: string;
  labels?: { [key: string]: string };
  managedFields?: Array<V1ManagedFieldsEntry>;
  name?: string;
  namespace?: string;
  ownerReferences?: Array<V1OwnerReference>;
  resourceVersion?: string;
  selfLink?: string;
  uid?: string;
}

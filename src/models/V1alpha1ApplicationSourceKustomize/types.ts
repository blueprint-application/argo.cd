import { V1alpha1KustomizeReplicaModelOptions as V1alpha1KustomizeReplica } from '../V1alpha1KustomizeReplica';

export interface V1alpha1ApplicationSourceKustomizeModelOptions {
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
}

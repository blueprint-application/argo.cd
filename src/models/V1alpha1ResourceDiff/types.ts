export interface V1alpha1ResourceDiffModelOptions {
  diff?: string;
  group?: string;
  hook?: boolean;
  kind?: string;
  liveState?: string;
  modified?: boolean;
  name?: string;
  namespace?: string;
  normalizedLiveState?: string;
  predictedLiveState?: string;
  resourceVersion?: string;
  targetState?: string;
}

import { V1alpha1ApplicationSourceDirectoryModelOptions as V1alpha1ApplicationSourceDirectory } from '../V1alpha1ApplicationSourceDirectory';
import { V1alpha1ApplicationSourceHelmModelOptions as V1alpha1ApplicationSourceHelm } from '../V1alpha1ApplicationSourceHelm';
import { V1alpha1ApplicationSourceKustomizeModelOptions as V1alpha1ApplicationSourceKustomize } from '../V1alpha1ApplicationSourceKustomize';
import { V1alpha1ApplicationSourcePluginModelOptions as V1alpha1ApplicationSourcePlugin } from '../V1alpha1ApplicationSourcePlugin';

export interface V1alpha1ApplicationSourceModelOptions {
  chart?: string;
  directory?: V1alpha1ApplicationSourceDirectory;
  helm?: V1alpha1ApplicationSourceHelm;
  kustomize?: V1alpha1ApplicationSourceKustomize;
  path?: string;
  plugin?: V1alpha1ApplicationSourcePlugin;
  ref?: string;
  repoURL?: string;
  targetRevision?: string;
}

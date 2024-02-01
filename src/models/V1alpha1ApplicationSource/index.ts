import { V1alpha1ApplicationSourceDirectoryModelOptions as V1alpha1ApplicationSourceDirectory } from '../V1alpha1ApplicationSourceDirectory';
import { V1alpha1ApplicationSourceHelmModelOptions as V1alpha1ApplicationSourceHelm } from '../V1alpha1ApplicationSourceHelm';
import { V1alpha1ApplicationSourceKustomizeModelOptions as V1alpha1ApplicationSourceKustomize } from '../V1alpha1ApplicationSourceKustomize';
import { V1alpha1ApplicationSourcePluginModelOptions as V1alpha1ApplicationSourcePlugin } from '../V1alpha1ApplicationSourcePlugin';
import { BaseModel } from '../types';
import type { V1alpha1ApplicationSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSourceModel extends BaseModel {
  // Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
  chart?: string;
  directory?: V1alpha1ApplicationSourceDirectory;
  helm?: V1alpha1ApplicationSourceHelm;
  kustomize?: V1alpha1ApplicationSourceKustomize;
  // Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
  path?: string;
  plugin?: V1alpha1ApplicationSourcePlugin;
  // Ref is reference to another source within sources field. This field will not be used if used with a `source` tag.
  ref?: string;
  repoURL?: string;
  // TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart\'s version.
  targetRevision?: string;

  constructor(data: V1alpha1ApplicationSourceModelOptions) {
    super();
    validate(data);
    this.chart = data.chart;
    this.directory = data.directory;
    this.helm = data.helm;
    this.kustomize = data.kustomize;
    this.path = data.path;
    this.plugin = data.plugin;
    this.ref = data.ref;
    this.repoURL = data.repoURL;
    this.targetRevision = data.targetRevision;
  }

  static create(data: V1alpha1ApplicationSourceModelOptions): V1alpha1ApplicationSourceModel {
    return new V1alpha1ApplicationSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      chart: this.chart,
      directory: this.directory,
      helm: this.helm,
      kustomize: this.kustomize,
      path: this.path,
      plugin: this.plugin,
      ref: this.ref,
      repoURL: this.repoURL,
      targetRevision: this.targetRevision,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSourceModel;

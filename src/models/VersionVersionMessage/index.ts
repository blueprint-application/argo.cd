import { BaseModel } from '../types';
import type { VersionVersionMessageModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class VersionVersionMessageModel extends BaseModel {
  buildDate?: string;
  compiler?: string;
  extraBuildInfo?: string;
  gitCommit?: string;
  gitTag?: string;
  gitTreeState?: string;
  goVersion?: string;
  helmVersion?: string;
  jsonnetVersion?: string;
  kubectlVersion?: string;
  kustomizeVersion?: string;
  platform?: string;
  version?: string;

  constructor(data: VersionVersionMessageModelOptions) {
    super();
    validate(data);
    this.buildDate = data.buildDate;
    this.compiler = data.compiler;
    this.extraBuildInfo = data.extraBuildInfo;
    this.gitCommit = data.gitCommit;
    this.gitTag = data.gitTag;
    this.gitTreeState = data.gitTreeState;
    this.goVersion = data.goVersion;
    this.helmVersion = data.helmVersion;
    this.jsonnetVersion = data.jsonnetVersion;
    this.kubectlVersion = data.kubectlVersion;
    this.kustomizeVersion = data.kustomizeVersion;
    this.platform = data.platform;
    this.version = data.version;
  }

  static create(data: VersionVersionMessageModelOptions): VersionVersionMessageModel {
    return new VersionVersionMessageModel(data);
  }

  toObject(): Partial<this> {
    return {
      buildDate: this.buildDate,
      compiler: this.compiler,
      extraBuildInfo: this.extraBuildInfo,
      gitCommit: this.gitCommit,
      gitTag: this.gitTag,
      gitTreeState: this.gitTreeState,
      goVersion: this.goVersion,
      helmVersion: this.helmVersion,
      jsonnetVersion: this.jsonnetVersion,
      kubectlVersion: this.kubectlVersion,
      kustomizeVersion: this.kustomizeVersion,
      platform: this.platform,
      version: this.version,
    } as Partial<this>;
  }
}

export default VersionVersionMessageModel;

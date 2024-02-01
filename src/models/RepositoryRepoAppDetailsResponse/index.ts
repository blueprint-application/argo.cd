import { RepositoryHelmAppSpecModelOptions as RepositoryHelmAppSpec } from '../RepositoryHelmAppSpec';
import { RepositoryKustomizeAppSpecModelOptions as RepositoryKustomizeAppSpec } from '../RepositoryKustomizeAppSpec';
import { RepositoryPluginAppSpecModelOptions as RepositoryPluginAppSpec } from '../RepositoryPluginAppSpec';
import { BaseModel } from '../types';
import type { RepositoryRepoAppDetailsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryRepoAppDetailsResponseModel extends BaseModel {
  directory?: any;
  helm?: RepositoryHelmAppSpec;
  kustomize?: RepositoryKustomizeAppSpec;
  plugin?: RepositoryPluginAppSpec;
  type?: string;

  constructor(data: RepositoryRepoAppDetailsResponseModelOptions) {
    super();
    validate(data);
    this.directory = data.directory;
    this.helm = data.helm;
    this.kustomize = data.kustomize;
    this.plugin = data.plugin;
    this.type = data.type;
  }

  static create(data: RepositoryRepoAppDetailsResponseModelOptions): RepositoryRepoAppDetailsResponseModel {
    return new RepositoryRepoAppDetailsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      directory: this.directory,
      helm: this.helm,
      kustomize: this.kustomize,
      plugin: this.plugin,
      type: this.type,
    } as Partial<this>;
  }
}

export default RepositoryRepoAppDetailsResponseModel;

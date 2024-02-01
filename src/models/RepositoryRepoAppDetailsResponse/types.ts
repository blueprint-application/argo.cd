import { RepositoryHelmAppSpecModelOptions as RepositoryHelmAppSpec } from '../RepositoryHelmAppSpec';
import { RepositoryKustomizeAppSpecModelOptions as RepositoryKustomizeAppSpec } from '../RepositoryKustomizeAppSpec';
import { RepositoryPluginAppSpecModelOptions as RepositoryPluginAppSpec } from '../RepositoryPluginAppSpec';

export interface RepositoryRepoAppDetailsResponseModelOptions {
  directory?: any;
  helm?: RepositoryHelmAppSpec;
  kustomize?: RepositoryKustomizeAppSpec;
  plugin?: RepositoryPluginAppSpec;
  type?: string;
}

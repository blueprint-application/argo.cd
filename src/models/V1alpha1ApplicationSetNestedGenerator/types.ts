import { V1JSONModelOptions as V1JSON } from '../V1JSON';
import { V1LabelSelectorModelOptions as V1LabelSelector } from '../V1LabelSelector';
import { V1alpha1ClusterGeneratorModelOptions as V1alpha1ClusterGenerator } from '../V1alpha1ClusterGenerator';
import { V1alpha1DuckTypeGeneratorModelOptions as V1alpha1DuckTypeGenerator } from '../V1alpha1DuckTypeGenerator';
import { V1alpha1GitGeneratorModelOptions as V1alpha1GitGenerator } from '../V1alpha1GitGenerator';
import { V1alpha1ListGeneratorModelOptions as V1alpha1ListGenerator } from '../V1alpha1ListGenerator';
import { V1alpha1PluginGeneratorModelOptions as V1alpha1PluginGenerator } from '../V1alpha1PluginGenerator';
import { V1alpha1PullRequestGeneratorModelOptions as V1alpha1PullRequestGenerator } from '../V1alpha1PullRequestGenerator';
import { V1alpha1SCMProviderGeneratorModelOptions as V1alpha1SCMProviderGenerator } from '../V1alpha1SCMProviderGenerator';

export interface V1alpha1ApplicationSetNestedGeneratorModelOptions {
  clusterDecisionResource?: V1alpha1DuckTypeGenerator;
  clusters?: V1alpha1ClusterGenerator;
  git?: V1alpha1GitGenerator;
  list?: V1alpha1ListGenerator;
  matrix?: V1JSON;
  merge?: V1JSON;
  plugin?: V1alpha1PluginGenerator;
  pullRequest?: V1alpha1PullRequestGenerator;
  scmProvider?: V1alpha1SCMProviderGenerator;
  selector?: V1LabelSelector;
}

import { ClusterDexConfigModelOptions as ClusterDexConfig } from '../ClusterDexConfig';
import { ClusterGoogleAnalyticsConfigModelOptions as ClusterGoogleAnalyticsConfig } from '../ClusterGoogleAnalyticsConfig';
import { ClusterHelpModelOptions as ClusterHelp } from '../ClusterHelp';
import { ClusterOIDCConfigModelOptions as ClusterOIDCConfig } from '../ClusterOIDCConfig';
import { ClusterPluginModelOptions as ClusterPlugin } from '../ClusterPlugin';
import { V1alpha1ConfigManagementPluginModelOptions as V1alpha1ConfigManagementPlugin } from '../V1alpha1ConfigManagementPlugin';
import { V1alpha1KustomizeOptionsModelOptions as V1alpha1KustomizeOptions } from '../V1alpha1KustomizeOptions';
import { V1alpha1ResourceOverrideModelOptions as V1alpha1ResourceOverride } from '../V1alpha1ResourceOverride';

export interface ClusterSettingsModelOptions {
  appLabelKey?: string;
  appsInAnyNamespaceEnabled?: boolean;
  configManagementPlugins?: Array<V1alpha1ConfigManagementPlugin>;
  controllerNamespace?: string;
  dexConfig?: ClusterDexConfig;
  execEnabled?: boolean;
  googleAnalytics?: ClusterGoogleAnalyticsConfig;
  help?: ClusterHelp;
  kustomizeOptions?: V1alpha1KustomizeOptions;
  kustomizeVersions?: Array<string>;
  oidcConfig?: ClusterOIDCConfig;
  passwordPattern?: string;
  plugins?: Array<ClusterPlugin>;
  resourceOverrides?: { [key: string]: V1alpha1ResourceOverride };
  statusBadgeEnabled?: boolean;
  statusBadgeRootUrl?: string;
  trackingMethod?: string;
  uiBannerContent?: string;
  uiBannerPermanent?: boolean;
  uiBannerPosition?: string;
  uiBannerURL?: string;
  uiCssURL?: string;
  url?: string;
  userLoginsDisabled?: boolean;
}

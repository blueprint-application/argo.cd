import { ClusterDexConfigModelOptions as ClusterDexConfig } from '../ClusterDexConfig';
import { ClusterGoogleAnalyticsConfigModelOptions as ClusterGoogleAnalyticsConfig } from '../ClusterGoogleAnalyticsConfig';
import { ClusterHelpModelOptions as ClusterHelp } from '../ClusterHelp';
import { ClusterOIDCConfigModelOptions as ClusterOIDCConfig } from '../ClusterOIDCConfig';
import { ClusterPluginModelOptions as ClusterPlugin } from '../ClusterPlugin';
import { V1alpha1ConfigManagementPluginModelOptions as V1alpha1ConfigManagementPlugin } from '../V1alpha1ConfigManagementPlugin';
import { V1alpha1KustomizeOptionsModelOptions as V1alpha1KustomizeOptions } from '../V1alpha1KustomizeOptions';
import { V1alpha1ResourceOverrideModelOptions as V1alpha1ResourceOverride } from '../V1alpha1ResourceOverride';
import { BaseModel } from '../types';
import type { ClusterSettingsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterSettingsModel extends BaseModel {
  appLabelKey?: string;
  appsInAnyNamespaceEnabled?: boolean;
  // Deprecated: use sidecar plugins instead.
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

  constructor(data: ClusterSettingsModelOptions) {
    super();
    validate(data);
    this.appLabelKey = data.appLabelKey;
    this.appsInAnyNamespaceEnabled = data.appsInAnyNamespaceEnabled;
    this.configManagementPlugins = data.configManagementPlugins;
    this.controllerNamespace = data.controllerNamespace;
    this.dexConfig = data.dexConfig;
    this.execEnabled = data.execEnabled;
    this.googleAnalytics = data.googleAnalytics;
    this.help = data.help;
    this.kustomizeOptions = data.kustomizeOptions;
    this.kustomizeVersions = data.kustomizeVersions;
    this.oidcConfig = data.oidcConfig;
    this.passwordPattern = data.passwordPattern;
    this.plugins = data.plugins;
    this.resourceOverrides = data.resourceOverrides;
    this.statusBadgeEnabled = data.statusBadgeEnabled;
    this.statusBadgeRootUrl = data.statusBadgeRootUrl;
    this.trackingMethod = data.trackingMethod;
    this.uiBannerContent = data.uiBannerContent;
    this.uiBannerPermanent = data.uiBannerPermanent;
    this.uiBannerPosition = data.uiBannerPosition;
    this.uiBannerURL = data.uiBannerURL;
    this.uiCssURL = data.uiCssURL;
    this.url = data.url;
    this.userLoginsDisabled = data.userLoginsDisabled;
  }

  static create(data: ClusterSettingsModelOptions): ClusterSettingsModel {
    return new ClusterSettingsModel(data);
  }

  toObject(): Partial<this> {
    return {
      appLabelKey: this.appLabelKey,
      appsInAnyNamespaceEnabled: this.appsInAnyNamespaceEnabled,
      configManagementPlugins: this.configManagementPlugins,
      controllerNamespace: this.controllerNamespace,
      dexConfig: this.dexConfig,
      execEnabled: this.execEnabled,
      googleAnalytics: this.googleAnalytics,
      help: this.help,
      kustomizeOptions: this.kustomizeOptions,
      kustomizeVersions: this.kustomizeVersions,
      oidcConfig: this.oidcConfig,
      passwordPattern: this.passwordPattern,
      plugins: this.plugins,
      resourceOverrides: this.resourceOverrides,
      statusBadgeEnabled: this.statusBadgeEnabled,
      statusBadgeRootUrl: this.statusBadgeRootUrl,
      trackingMethod: this.trackingMethod,
      uiBannerContent: this.uiBannerContent,
      uiBannerPermanent: this.uiBannerPermanent,
      uiBannerPosition: this.uiBannerPosition,
      uiBannerURL: this.uiBannerURL,
      uiCssURL: this.uiCssURL,
      url: this.url,
      userLoginsDisabled: this.userLoginsDisabled,
    } as Partial<this>;
  }
}

export default ClusterSettingsModel;

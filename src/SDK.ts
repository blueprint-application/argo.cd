import {
  AccountServiceApi,
  ApplicationServiceApi,
  ApplicationSetServiceApi,
  CertificateServiceApi,
  ClusterServiceApi,
  GPGKeyServiceApi,
  NotificationServiceApi,
  ProjectServiceApi,
  RepoCredsServiceApi,
  RepositoryServiceApi,
  SessionServiceApi,
  SettingsServiceApi,
  VersionServiceApi,
} from './api';
import { ApiClient, ApiClientConfig } from './client';

export class SDK {
  accountService: AccountServiceApi;
  applicationService: ApplicationServiceApi;
  applicationSetService: ApplicationSetServiceApi;
  certificateService: CertificateServiceApi;
  clusterService: ClusterServiceApi;
  gPGKeyService: GPGKeyServiceApi;
  notificationService: NotificationServiceApi;
  projectService: ProjectServiceApi;
  repoCredsService: RepoCredsServiceApi;
  repositoryService: RepositoryServiceApi;
  sessionService: SessionServiceApi;
  settingsService: SettingsServiceApi;
  versionService: VersionServiceApi;

  constructor(config: ApiClientConfig) {
    const apiClient = new ApiClient(config);
    this.accountService = new AccountServiceApi(apiClient);
    this.applicationService = new ApplicationServiceApi(apiClient);
    this.applicationSetService = new ApplicationSetServiceApi(apiClient);
    this.certificateService = new CertificateServiceApi(apiClient);
    this.clusterService = new ClusterServiceApi(apiClient);
    this.gPGKeyService = new GPGKeyServiceApi(apiClient);
    this.notificationService = new NotificationServiceApi(apiClient);
    this.projectService = new ProjectServiceApi(apiClient);
    this.repoCredsService = new RepoCredsServiceApi(apiClient);
    this.repositoryService = new RepositoryServiceApi(apiClient);
    this.sessionService = new SessionServiceApi(apiClient);
    this.settingsService = new SettingsServiceApi(apiClient);
    this.versionService = new VersionServiceApi(apiClient);
  }

  static create(config: ApiClientConfig): SDK {
    return new SDK(config);
  }
}

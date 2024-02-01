import {
  ApplicationApplicationManifestQueryWithFilesWrapperModelOptions as ApplicationApplicationManifestQueryWithFilesWrapper,
  ApplicationApplicationPatchRequestModelOptions as ApplicationApplicationPatchRequest,
  ApplicationApplicationRollbackRequestModelOptions as ApplicationApplicationRollbackRequest,
  ApplicationApplicationSyncRequestModelOptions as ApplicationApplicationSyncRequest,
  V1alpha1ApplicationModelOptions as V1alpha1Application,
  V1alpha1ApplicationSpecModelOptions as V1alpha1ApplicationSpec,
} from '../../models';
import { BaseParams } from '../base';

export interface ApplicationServiceCreateParams extends BaseParams {
  query?: {
    upsert?: boolean;
    validate?: boolean;
  };
  body: V1alpha1Application;
}

export interface ApplicationServiceDeleteParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    cascade?: boolean;
    propagationPolicy?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceDeleteResourceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    force?: boolean;
    orphan?: boolean;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceGetParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    refresh?: string;
    projects?: Array<string>;
    resourceVersion?: string;
    selector?: string;
    repo?: string;
    appNamespace?: string;
    project?: Array<string>;
  };
}

export interface ApplicationServiceGetApplicationSyncWindowsParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceGetManifestsParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    revision?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceGetManifestsWithFilesParams extends BaseParams {
  body: ApplicationApplicationManifestQueryWithFilesWrapper;
}

export interface ApplicationServiceGetResourceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceListParams extends BaseParams {
  query?: {
    name?: string;
    refresh?: string;
    projects?: Array<string>;
    resourceVersion?: string;
    selector?: string;
    repo?: string;
    appNamespace?: string;
    project?: Array<string>;
  };
}

export interface ApplicationServiceListLinksParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceListResourceActionsParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceListResourceEventsParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    resourceNamespace?: string;
    resourceName?: string;
    resourceUID?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceListResourceLinksParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceManagedResourcesParams extends BaseParams {
  path: {
    applicationName: string;
  };
  query?: {
    namespace?: string;
    name?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServicePatchParams extends BaseParams {
  path: {
    name: string;
  };
  body: ApplicationApplicationPatchRequest;
}

export interface ApplicationServicePatchResourceParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    patchType?: string;
    appNamespace?: string;
    project?: string;
  };
  body: string;
}

export interface ApplicationServicePodLogsParams extends BaseParams {
  path: {
    name: string;
    podName: string;
  };
  query?: {
    namespace?: string;
    container?: string;
    sinceSeconds?: string;
    'sinceTime.seconds'?: string;
    'sinceTime.nanos'?: number;
    tailLines?: string;
    follow?: boolean;
    untilTime?: string;
    filter?: string;
    kind?: string;
    group?: string;
    resourceName?: string;
    previous?: boolean;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServicePodLogs2Params extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    podName?: string;
    container?: string;
    sinceSeconds?: string;
    'sinceTime.seconds'?: string;
    'sinceTime.nanos'?: number;
    tailLines?: string;
    follow?: boolean;
    untilTime?: string;
    filter?: string;
    kind?: string;
    group?: string;
    resourceName?: string;
    previous?: boolean;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceResourceTreeParams extends BaseParams {
  path: {
    applicationName: string;
  };
  query?: {
    namespace?: string;
    name?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceRevisionChartDetailsParams extends BaseParams {
  path: {
    name: string;
    revision: string;
  };
  query?: {
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceRevisionMetadataParams extends BaseParams {
  path: {
    name: string;
    revision: string;
  };
  query?: {
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceRollbackParams extends BaseParams {
  path: {
    name: string;
  };
  body: ApplicationApplicationRollbackRequest;
}

export interface ApplicationServiceRunResourceActionParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    namespace?: string;
    resourceName?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
  body: string;
}

export interface ApplicationServiceSyncParams extends BaseParams {
  path: {
    name: string;
  };
  body: ApplicationApplicationSyncRequest;
}

export interface ApplicationServiceTerminateOperationParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    appNamespace?: string;
    project?: string;
  };
}

export interface ApplicationServiceUpdateParams extends BaseParams {
  path: {
    'application.metadata.name': string;
  };
  query?: {
    validate?: boolean;
    project?: string;
  };
  body: V1alpha1Application;
}

export interface ApplicationServiceUpdateSpecParams extends BaseParams {
  path: {
    name: string;
  };
  query?: {
    validate?: boolean;
    appNamespace?: string;
    project?: string;
  };
  body: V1alpha1ApplicationSpec;
}

export interface ApplicationServiceWatchParams extends BaseParams {
  query?: {
    name?: string;
    refresh?: string;
    projects?: Array<string>;
    resourceVersion?: string;
    selector?: string;
    repo?: string;
    appNamespace?: string;
    project?: Array<string>;
  };
}

export interface ApplicationServiceWatchResourceTreeParams extends BaseParams {
  path: {
    applicationName: string;
  };
  query?: {
    namespace?: string;
    name?: string;
    version?: string;
    group?: string;
    kind?: string;
    appNamespace?: string;
    project?: string;
  };
}

export default {};

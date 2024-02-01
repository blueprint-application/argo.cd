import {
  ProjectProjectCreateRequestModelOptions as ProjectProjectCreateRequest,
  ProjectProjectTokenCreateRequestModelOptions as ProjectProjectTokenCreateRequest,
  ProjectProjectUpdateRequestModelOptions as ProjectProjectUpdateRequest,
} from '../../models';
import { BaseParams } from '../base';

export interface ProjectServiceCreateParams extends BaseParams {
  body: ProjectProjectCreateRequest;
}

export interface ProjectServiceCreateTokenParams extends BaseParams {
  path: {
    project: string;
    role: string;
  };
  body: ProjectProjectTokenCreateRequest;
}

export interface ProjectServiceDeleteParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceDeleteTokenParams extends BaseParams {
  path: {
    project: string;
    role: string;
    iat: string;
  };
  query?: {
    id?: string;
  };
}

export interface ProjectServiceGetParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceGetDetailedProjectParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceGetGlobalProjectsParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceGetSyncWindowsStateParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceListParams extends BaseParams {
  query?: {
    name?: string;
  };
}

export interface ProjectServiceListEventsParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceListLinksParams extends BaseParams {
  path: {
    name: string;
  };
}

export interface ProjectServiceUpdateParams extends BaseParams {
  path: {
    'project.metadata.name': string;
  };
  body: ProjectProjectUpdateRequest;
}

export default {};

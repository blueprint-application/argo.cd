import { AxiosInstance, AxiosRequestConfig } from 'axios';

export type AuthDiscriminator = 'basic' | 'bearer' | 'apiKey' | 'oauth';

export interface AuthBasic {
  username: string;
  password: string;
}

export interface AuthApiKey {
  apiKey: string;
  apiKeyPrefix?: string;
  apiKeyParamName?: string;
  in?: 'header'; // query - if no value set
}

export type GetBearerTokenFn = () => string | Promise<string>;

export interface AuthBearer {
  accessToken: string | GetBearerTokenFn;
}

export type AuthDecoratorFn<Auth> = (config: AxiosRequestConfig, auth: Auth) => Promise<AxiosRequestConfig>;

export type RequestHeaders = Record<string, string>;

export type ApiClientAuthOptions =
  | { discriminator: 'basic'; credentials: AuthBasic }
  | { discriminator: 'bearer' | 'oauth'; credentials: AuthBearer }
  | { discriminator: 'apiKey'; credentials: AuthApiKey };

export interface ApiClientConfig {
  instance?: AxiosInstance;
  baseURL: string;
  cache?: boolean;
  timeout?: number;
  auth?: ApiClientAuthOptions | Array<ApiClientAuthOptions>;
}

export interface ApiClientAuth {
  basic?: AuthBasic;
  bearer?: AuthBearer;
  oauth?: AuthBearer;
  apiKey?: AuthApiKey;
}

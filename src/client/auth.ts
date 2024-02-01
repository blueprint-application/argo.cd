import { AxiosRequestConfig } from 'axios';
import { deepMerge, isFunction } from '../utils';
import {
  ApiClientAuthOptions,
  AuthApiKey,
  AuthBasic,
  AuthBearer,
  AuthDecoratorFn,
  GetBearerTokenFn,
  RequestHeaders,
} from './types';

export const apiKey: AuthDecoratorFn<AuthApiKey> = async (config: AxiosRequestConfig, auth: AuthApiKey) => {
  const apiKey = [auth.apiKeyPrefix, auth.apiKey].filter(Boolean).join(' ');
  return deepMerge(config, {
    [auth.in === 'header' ? 'headers' : 'params']: {
      [auth.apiKeyParamName || 'Authorization']: apiKey,
    },
  });
};

export const basic: AuthDecoratorFn<AuthBasic> = async (config: AxiosRequestConfig, auth: AuthBasic) =>
  deepMerge(config, { auth });

export const bearer: AuthDecoratorFn<AuthBearer> = async (config: AxiosRequestConfig, auth: AuthBearer) => {
  const token = isFunction(auth.accessToken) ? await (auth.accessToken as GetBearerTokenFn)() : auth.accessToken;
  const headers: RequestHeaders = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return deepMerge(config, { headers }) as AxiosRequestConfig;
};

export const applyAuthToRequest = async (
  config: AxiosRequestConfig,
  auth?: ApiClientAuthOptions,
): Promise<AxiosRequestConfig> => {
  switch (auth?.discriminator) {
    case 'apiKey':
      return apiKey(config, auth.credentials);
    case 'basic':
      return basic(config, auth.credentials);
    case 'bearer':
    case 'oauth':
      return bearer(config, auth.credentials);
    default:
      return config;
  }
};

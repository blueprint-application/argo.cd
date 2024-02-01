import ApiClient from '../client';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'connect' | 'trace';

const HTTP_METHODS: Record<Uppercase<HttpMethod>, HttpMethod> = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
  OPTIONS: 'options',
  HEAD: 'head',
  CONNECT: 'connect',
  TRACE: 'trace',
};

export interface ParamsValidatorOptions<P extends Record<string, unknown> = Record<string, unknown>> {
  params?: P;
  required?: Array<keyof Partial<P>>;
}

export interface BaseParams {
  query?: Record<string, unknown>;
  headers?: Record<string, string>;
}

export class BaseApi {
  readonly HTTP_METHODS = HTTP_METHODS;
  apiClient: ApiClient;

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  validateParams<P extends Record<string, unknown> = Record<string, unknown>>(
    options?: ParamsValidatorOptions<P>,
  ): void {
    const { params, required = [] } = options || {};
    if (params) {
      const missing = required.filter((propName: keyof P) => !params[propName]);
      if (missing.length) {
        throw new Error(`Required params missing: ${missing.join(',')}`);
      }
    }
  }

  buildUrl<P extends Record<string, unknown> = Record<string, unknown>>(
    template: string,
    options?: ParamsValidatorOptions<P>,
  ): string {
    const { params } = options || {};
    if (!params) {
      return template;
    }

    this.validateParams(options);

    return Object.keys(params).reduce<string>(
      (acc, key) => acc.replace(`{${key}}`, (params as Record<string, string>)[key]),
      template,
    );
  }
}

export default BaseApi;

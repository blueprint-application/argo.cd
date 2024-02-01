import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { deepMerge, isArray, isObject, isString } from '../utils';
import { applyAuthToRequest } from './auth';
import { ApiClientAuth, ApiClientAuthOptions, ApiClientConfig } from './types';

export * from './types';

let singleton: ApiClient;

export class ApiClient {
  private readonly baseURL: string;
  cache: boolean;
  private instance: AxiosInstance;
  private readonly authMap?: ApiClientAuth;
  private readonly auth?: ApiClientAuthOptions;

  constructor(cfg: ApiClientConfig) {
    this.baseURL = cfg.baseURL.replace(/\/+$/, '');
    this.cache = !!cfg.cache;
    this.instance =
      cfg.instance ||
      axios.create({
        baseURL: this.baseURL,
        timeout: cfg.timeout || 6e4,
      });
    if (cfg.auth) {
      if (isArray(cfg.auth) && cfg.auth.length) {
        this.auth = cfg.auth[0];
        this.authMap = cfg.auth.reduce<ApiClientAuth>(
          (acc, auth) => ({
            ...acc,
            [(auth as ApiClientAuthOptions).discriminator]: auth,
          }),
          {},
        ) as unknown as ApiClientAuth;
      } else if (isObject(cfg.auth)) {
        this.auth = cfg.auth as ApiClientAuthOptions;
        this.authMap = { [this.auth.discriminator]: this.auth };
      }
    }
  }

  static create(cfg: ApiClientConfig) {
    return new ApiClient(cfg);
  }

  static singleton(cfg: ApiClientConfig) {
    return singleton || (singleton = ApiClient.create(cfg));
  }

  public async request(
    config: AxiosRequestConfig,
    auth?: ApiClientAuthOptions | ApiClientAuthOptions['discriminator'],
  ) {
    const _auth = isString(auth)
      ? this.authMap?.[auth as ApiClientAuthOptions['discriminator']]
      : isObject(auth)
      ? auth
      : this.auth;

    const { data } = await this.instance.request(
      await applyAuthToRequest(
        this.cache ? config : deepMerge(config, { params: { _: Date.now() } }),
        _auth as ApiClientAuthOptions,
      ),
    );
    return data;
  }
}

export default ApiClient;

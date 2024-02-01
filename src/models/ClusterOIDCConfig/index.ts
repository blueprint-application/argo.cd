import { OidcClaimModelOptions as OidcClaim } from '../OidcClaim';
import { BaseModel } from '../types';
import type { ClusterOIDCConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterOIDCConfigModel extends BaseModel {
  cliClientID?: string;
  clientID?: string;
  idTokenClaims?: { [key: string]: OidcClaim };
  issuer?: string;
  name?: string;
  scopes?: Array<string>;

  constructor(data: ClusterOIDCConfigModelOptions) {
    super();
    validate(data);
    this.cliClientID = data.cliClientID;
    this.clientID = data.clientID;
    this.idTokenClaims = data.idTokenClaims;
    this.issuer = data.issuer;
    this.name = data.name;
    this.scopes = data.scopes;
  }

  static create(data: ClusterOIDCConfigModelOptions): ClusterOIDCConfigModel {
    return new ClusterOIDCConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      cliClientID: this.cliClientID,
      clientID: this.clientID,
      idTokenClaims: this.idTokenClaims,
      issuer: this.issuer,
      name: this.name,
      scopes: this.scopes,
    } as Partial<this>;
  }
}

export default ClusterOIDCConfigModel;

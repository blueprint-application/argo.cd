import { OidcClaimModelOptions as OidcClaim } from '../OidcClaim';

export interface ClusterOIDCConfigModelOptions {
  cliClientID?: string;
  clientID?: string;
  idTokenClaims?: { [key: string]: OidcClaim };
  issuer?: string;
  name?: string;
  scopes?: Array<string>;
}

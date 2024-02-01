import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1GnuPGPublicKeyModelOptions as V1alpha1GnuPGPublicKey } from '../V1alpha1GnuPGPublicKey';

export interface V1alpha1GnuPGPublicKeyListModelOptions {
  items?: Array<V1alpha1GnuPGPublicKey>;
  metadata?: V1ListMeta;
}

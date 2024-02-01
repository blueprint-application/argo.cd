import { V1ListMetaModelOptions as V1ListMeta } from '../V1ListMeta';
import { V1alpha1RepositoryCertificateModelOptions as V1alpha1RepositoryCertificate } from '../V1alpha1RepositoryCertificate';

export interface V1alpha1RepositoryCertificateListModelOptions {
  items?: Array<V1alpha1RepositoryCertificate>;
  metadata?: V1ListMeta;
}

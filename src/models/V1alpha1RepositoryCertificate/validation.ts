import { JSONSchema7 } from 'json-schema';
import { V1alpha1RepositoryCertificateSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = V1alpha1RepositoryCertificateSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

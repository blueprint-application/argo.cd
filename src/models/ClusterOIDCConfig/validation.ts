import { JSONSchema7 } from 'json-schema';
import { ClusterOIDCConfigSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ClusterOIDCConfigSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

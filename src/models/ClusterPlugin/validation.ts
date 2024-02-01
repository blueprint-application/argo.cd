import { JSONSchema7 } from 'json-schema';
import { ClusterPluginSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ClusterPluginSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

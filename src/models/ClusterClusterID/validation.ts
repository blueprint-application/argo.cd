import { JSONSchema7 } from 'json-schema';
import { ClusterClusterIDSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ClusterClusterIDSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

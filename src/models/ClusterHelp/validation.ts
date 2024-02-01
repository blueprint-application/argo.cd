import { JSONSchema7 } from 'json-schema';
import { ClusterHelpSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ClusterHelpSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

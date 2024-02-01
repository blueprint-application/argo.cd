import { JSONSchema7 } from 'json-schema';
import { ApplicationSyncOptionsSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ApplicationSyncOptionsSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

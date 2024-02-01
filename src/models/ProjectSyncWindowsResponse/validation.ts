import { JSONSchema7 } from 'json-schema';
import { ProjectSyncWindowsResponseSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = ProjectSyncWindowsResponseSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

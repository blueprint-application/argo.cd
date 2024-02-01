import { JSONSchema7 } from 'json-schema';
import { RepositoryKustomizeAppSpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = RepositoryKustomizeAppSpecSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

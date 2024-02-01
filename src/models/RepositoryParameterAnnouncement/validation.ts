import { JSONSchema7 } from 'json-schema';
import { RepositoryParameterAnnouncementSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = RepositoryParameterAnnouncementSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

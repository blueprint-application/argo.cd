import { JSONSchema7 } from 'json-schema';
import { NotificationTemplateSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = NotificationTemplateSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);

import AJV from 'ajv';
import { JSONSchema7 } from 'json-schema';
import * as _ from 'lodash';
import * as allSchemas from '../schemas';

interface SchemaEntry {
  ref: string;
  schema: JSONSchema7;
}

type Schemas = Record<string, SchemaEntry[]>;

const init = (schemas: Schemas) => {
  const ajv = new AJV({ strict: false });

  _.forEach(_.values(schemas), (entry) => {
    const [{ ref, schema }] = entry;
    ajv.addSchema(schema, ref);
  });

  return ajv;
};

export const ajv = init(allSchemas as unknown as Schemas);

export function validate(schema: JSONSchema7, data: unknown): boolean {
  return ajv.validate(schema, data);
}

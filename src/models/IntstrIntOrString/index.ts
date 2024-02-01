import { BaseModel } from '../types';
import type { IntstrIntOrStringModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IntstrIntOrStringModel extends BaseModel {
  intVal?: number;
  strVal?: string;
  type?: string;

  constructor(data: IntstrIntOrStringModelOptions) {
    super();
    validate(data);
    this.intVal = data.intVal;
    this.strVal = data.strVal;
    this.type = data.type;
  }

  static create(data: IntstrIntOrStringModelOptions): IntstrIntOrStringModel {
    return new IntstrIntOrStringModel(data);
  }

  toObject(): Partial<this> {
    return {
      intVal: this.intVal,
      strVal: this.strVal,
      type: this.type,
    } as Partial<this>;
  }
}

export default IntstrIntOrStringModel;

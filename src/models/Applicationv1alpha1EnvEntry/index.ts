import { BaseModel } from '../types';
import type { Applicationv1alpha1EnvEntryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class Applicationv1alpha1EnvEntryModel extends BaseModel {
  name?: string;
  value?: string;

  constructor(data: Applicationv1alpha1EnvEntryModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: Applicationv1alpha1EnvEntryModelOptions): Applicationv1alpha1EnvEntryModel {
    return new Applicationv1alpha1EnvEntryModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default Applicationv1alpha1EnvEntryModel;

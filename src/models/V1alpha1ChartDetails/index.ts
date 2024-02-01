import { BaseModel } from '../types';
import type { V1alpha1ChartDetailsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ChartDetailsModel extends BaseModel {
  description?: string;
  home?: string;
  maintainers?: Array<string>;

  constructor(data: V1alpha1ChartDetailsModelOptions) {
    super();
    validate(data);
    this.description = data.description;
    this.home = data.home;
    this.maintainers = data.maintainers;
  }

  static create(data: V1alpha1ChartDetailsModelOptions): V1alpha1ChartDetailsModel {
    return new V1alpha1ChartDetailsModel(data);
  }

  toObject(): Partial<this> {
    return {
      description: this.description,
      home: this.home,
      maintainers: this.maintainers,
    } as Partial<this>;
  }
}

export default V1alpha1ChartDetailsModel;

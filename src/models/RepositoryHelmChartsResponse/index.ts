import { RepositoryHelmChartModelOptions as RepositoryHelmChart } from '../RepositoryHelmChart';
import { BaseModel } from '../types';
import type { RepositoryHelmChartsResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryHelmChartsResponseModel extends BaseModel {
  items?: Array<RepositoryHelmChart>;

  constructor(data: RepositoryHelmChartsResponseModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: RepositoryHelmChartsResponseModelOptions): RepositoryHelmChartsResponseModel {
    return new RepositoryHelmChartsResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default RepositoryHelmChartsResponseModel;

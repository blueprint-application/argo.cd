import { BaseModel } from '../types';
import type { RepositoryHelmChartModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class RepositoryHelmChartModel extends BaseModel {
  name?: string;
  versions?: Array<string>;

  constructor(data: RepositoryHelmChartModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.versions = data.versions;
  }

  static create(data: RepositoryHelmChartModelOptions): RepositoryHelmChartModel {
    return new RepositoryHelmChartModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      versions: this.versions,
    } as Partial<this>;
  }
}

export default RepositoryHelmChartModel;

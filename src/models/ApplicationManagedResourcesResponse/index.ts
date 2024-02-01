import { V1alpha1ResourceDiffModelOptions as V1alpha1ResourceDiff } from '../V1alpha1ResourceDiff';
import { BaseModel } from '../types';
import type { ApplicationManagedResourcesResponseModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ApplicationManagedResourcesResponseModel extends BaseModel {
  items?: Array<V1alpha1ResourceDiff>;

  constructor(data: ApplicationManagedResourcesResponseModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: ApplicationManagedResourcesResponseModelOptions): ApplicationManagedResourcesResponseModel {
    return new ApplicationManagedResourcesResponseModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default ApplicationManagedResourcesResponseModel;

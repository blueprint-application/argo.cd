import { BaseModel } from '../types';
import type { V1alpha1ApplicationSummaryModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ApplicationSummaryModel extends BaseModel {
  // ExternalURLs holds all external URLs of application child resources.
  externalURLs?: Array<string>;
  // Images holds all images of application child resources.
  images?: Array<string>;

  constructor(data: V1alpha1ApplicationSummaryModelOptions) {
    super();
    validate(data);
    this.externalURLs = data.externalURLs;
    this.images = data.images;
  }

  static create(data: V1alpha1ApplicationSummaryModelOptions): V1alpha1ApplicationSummaryModel {
    return new V1alpha1ApplicationSummaryModel(data);
  }

  toObject(): Partial<this> {
    return {
      externalURLs: this.externalURLs,
      images: this.images,
    } as Partial<this>;
  }
}

export default V1alpha1ApplicationSummaryModel;

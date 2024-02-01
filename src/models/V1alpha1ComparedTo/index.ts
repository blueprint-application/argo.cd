import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1ResourceIgnoreDifferencesModelOptions as V1alpha1ResourceIgnoreDifferences } from '../V1alpha1ResourceIgnoreDifferences';
import { BaseModel } from '../types';
import type { V1alpha1ComparedToModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1ComparedToModel extends BaseModel {
  destination?: V1alpha1ApplicationDestination;
  ignoreDifferences?: Array<V1alpha1ResourceIgnoreDifferences>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;

  constructor(data: V1alpha1ComparedToModelOptions) {
    super();
    validate(data);
    this.destination = data.destination;
    this.ignoreDifferences = data.ignoreDifferences;
    this.source = data.source;
    this.sources = data.sources;
  }

  static create(data: V1alpha1ComparedToModelOptions): V1alpha1ComparedToModel {
    return new V1alpha1ComparedToModel(data);
  }

  toObject(): Partial<this> {
    return {
      destination: this.destination,
      ignoreDifferences: this.ignoreDifferences,
      source: this.source,
      sources: this.sources,
    } as Partial<this>;
  }
}

export default V1alpha1ComparedToModel;

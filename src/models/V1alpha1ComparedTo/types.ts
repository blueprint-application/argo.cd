import { V1alpha1ApplicationDestinationModelOptions as V1alpha1ApplicationDestination } from '../V1alpha1ApplicationDestination';
import { V1alpha1ApplicationSourceModelOptions as V1alpha1ApplicationSource } from '../V1alpha1ApplicationSource';
import { V1alpha1ResourceIgnoreDifferencesModelOptions as V1alpha1ResourceIgnoreDifferences } from '../V1alpha1ResourceIgnoreDifferences';

export interface V1alpha1ComparedToModelOptions {
  destination?: V1alpha1ApplicationDestination;
  ignoreDifferences?: Array<V1alpha1ResourceIgnoreDifferences>;
  source?: V1alpha1ApplicationSource;
  sources?: Array<V1alpha1ApplicationSource>;
}

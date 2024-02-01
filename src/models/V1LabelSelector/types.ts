import { V1LabelSelectorRequirementModelOptions as V1LabelSelectorRequirement } from '../V1LabelSelectorRequirement';

export interface V1LabelSelectorModelOptions {
  matchExpressions?: Array<V1LabelSelectorRequirement>;
  matchLabels?: { [key: string]: string };
}

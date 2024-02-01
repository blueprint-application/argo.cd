import { V1LabelSelectorRequirementModelOptions as V1LabelSelectorRequirement } from '../V1LabelSelectorRequirement';
import { BaseModel } from '../types';
import type { V1LabelSelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1LabelSelectorModel extends BaseModel {
  matchExpressions?: Array<V1LabelSelectorRequirement>;
  matchLabels?: { [key: string]: string };

  constructor(data: V1LabelSelectorModelOptions) {
    super();
    validate(data);
    this.matchExpressions = data.matchExpressions;
    this.matchLabels = data.matchLabels;
  }

  static create(data: V1LabelSelectorModelOptions): V1LabelSelectorModel {
    return new V1LabelSelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      matchExpressions: this.matchExpressions,
      matchLabels: this.matchLabels,
    } as Partial<this>;
  }
}

export default V1LabelSelectorModel;

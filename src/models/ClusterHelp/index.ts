import { BaseModel } from '../types';
import type { ClusterHelpModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterHelpModel extends BaseModel {
  binaryUrls?: { [key: string]: string };
  chatText?: string;
  chatUrl?: string;

  constructor(data: ClusterHelpModelOptions) {
    super();
    validate(data);
    this.binaryUrls = data.binaryUrls;
    this.chatText = data.chatText;
    this.chatUrl = data.chatUrl;
  }

  static create(data: ClusterHelpModelOptions): ClusterHelpModel {
    return new ClusterHelpModel(data);
  }

  toObject(): Partial<this> {
    return {
      binaryUrls: this.binaryUrls,
      chatText: this.chatText,
      chatUrl: this.chatUrl,
    } as Partial<this>;
  }
}

export default ClusterHelpModel;

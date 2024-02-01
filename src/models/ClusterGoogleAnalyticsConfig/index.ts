import { BaseModel } from '../types';
import type { ClusterGoogleAnalyticsConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class ClusterGoogleAnalyticsConfigModel extends BaseModel {
  anonymizeUsers?: boolean;
  trackingID?: string;

  constructor(data: ClusterGoogleAnalyticsConfigModelOptions) {
    super();
    validate(data);
    this.anonymizeUsers = data.anonymizeUsers;
    this.trackingID = data.trackingID;
  }

  static create(data: ClusterGoogleAnalyticsConfigModelOptions): ClusterGoogleAnalyticsConfigModel {
    return new ClusterGoogleAnalyticsConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      anonymizeUsers: this.anonymizeUsers,
      trackingID: this.trackingID,
    } as Partial<this>;
  }
}

export default ClusterGoogleAnalyticsConfigModel;

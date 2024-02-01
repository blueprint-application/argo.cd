import { BaseModel } from '../types';
import type { V1alpha1AWSAuthConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1alpha1AWSAuthConfigModel extends BaseModel {
  clusterName?: string;
  // RoleARN contains optional role ARN. If set then AWS IAM Authenticator assume a role to perform cluster operations instead of the default AWS credential provider chain.
  roleARN?: string;

  constructor(data: V1alpha1AWSAuthConfigModelOptions) {
    super();
    validate(data);
    this.clusterName = data.clusterName;
    this.roleARN = data.roleARN;
  }

  static create(data: V1alpha1AWSAuthConfigModelOptions): V1alpha1AWSAuthConfigModel {
    return new V1alpha1AWSAuthConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      clusterName: this.clusterName,
      roleARN: this.roleARN,
    } as Partial<this>;
  }
}

export default V1alpha1AWSAuthConfigModel;

import { BaseModel } from '../types';
import type { V1NodeSystemInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class V1NodeSystemInfoModel extends BaseModel {
  architecture?: string;
  // Boot ID reported by the node.
  bootID?: string;
  // ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
  containerRuntimeVersion?: string;
  // Kernel Version reported by the node from \'uname -r\' (e.g. 3.16.0-0.bpo.4-amd64).
  kernelVersion?: string;
  // KubeProxy Version reported by the node.
  kubeProxyVersion?: string;
  // Kubelet Version reported by the node.
  kubeletVersion?: string;
  machineID?: string;
  operatingSystem?: string;
  // OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
  osImage?: string;
  systemUUID?: string;

  constructor(data: V1NodeSystemInfoModelOptions) {
    super();
    validate(data);
    this.architecture = data.architecture;
    this.bootID = data.bootID;
    this.containerRuntimeVersion = data.containerRuntimeVersion;
    this.kernelVersion = data.kernelVersion;
    this.kubeProxyVersion = data.kubeProxyVersion;
    this.kubeletVersion = data.kubeletVersion;
    this.machineID = data.machineID;
    this.operatingSystem = data.operatingSystem;
    this.osImage = data.osImage;
    this.systemUUID = data.systemUUID;
  }

  static create(data: V1NodeSystemInfoModelOptions): V1NodeSystemInfoModel {
    return new V1NodeSystemInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      architecture: this.architecture,
      bootID: this.bootID,
      containerRuntimeVersion: this.containerRuntimeVersion,
      kernelVersion: this.kernelVersion,
      kubeProxyVersion: this.kubeProxyVersion,
      kubeletVersion: this.kubeletVersion,
      machineID: this.machineID,
      operatingSystem: this.operatingSystem,
      osImage: this.osImage,
      systemUUID: this.systemUUID,
    } as Partial<this>;
  }
}

export default V1NodeSystemInfoModel;

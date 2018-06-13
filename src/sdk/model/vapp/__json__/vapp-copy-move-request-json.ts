import { VappChildVmCopyMoveRequestJson } from './vapp-child-vm-copy-move-request-json';

export interface VappCopyMoveRequestJson {
  name: string;
  description: string;
  vm_specs: Array<VappChildVmCopyMoveRequestJson>;
  vdc_uuid: string;
}

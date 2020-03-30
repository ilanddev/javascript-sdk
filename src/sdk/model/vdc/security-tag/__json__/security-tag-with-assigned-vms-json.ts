import { SecurityTagVmJson } from './security-tag-vm-json';

/**
 * Security Tag with Assigned VMs JSON
 */
export interface SecurityTagWithAssignedVMsJson {
  assigned_vms: Array<SecurityTagVmJson>;
  object_id: string;
  name: string;
  description: string;
  is_temporal: boolean;
  vm_count: number;
}

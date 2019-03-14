import { EntityJson } from '../../common/__json__/entity-json';
import { OperatingSystem } from './operating-system-type';
import { VmStatus } from './vm-status-type';
import { DiskType } from '../../common/__json__/disk-type';
import { GuestCustomizationUpdateRequestJson } from
    '../guest-customization/__json__/guest-customization-update-request-json';
import { IpAddressingModeType } from '../../common/__json__/ip-adressing-mode-type';
import { AdapterType } from '../../common/__json__/adapter-type';
import { VdcAllocationModel } from '../../vdc/__json__/vdc-allocation-model-type';

/**
 * Interface for VM properties.
 */
export interface VmJson extends EntityJson {
  allocation_model: VdcAllocationModel;
  cores_per_socket: number;
  cpus_number: number;
  created_date: number | null;
  deployed: boolean;
  description: string;
  hardware_version: string;
  inserted_media_name: string;
  location_id: string;
  media_inserted: boolean;
  memory_size: number;
  org_uuid: string;
  os: OperatingSystem;
  status: VmStatus;
  storage_profiles: Array<string>;
  vapp_uuid: string;
  vcenter_href: string;
  vcenter_instance_uuid: string;
  vcenter_moref: string;
  vcenter_name: string;
  vcloud_href: string;
  vdc_uuid: string;
  vim_datastore_ref: string;
  vm_local_id: string;
}

/**
 * Specification for VM snapshot creation request.
 */
export interface VmCreateSnapshotRequestJson {
  memory: boolean;
  quiesce: boolean;
  name: string;
  description: string;
}

/**
 * Specification for VM description update request.
 */
export interface VmUpdateDescriptionRequestJson {
  description: string;
}

/**
 * Specification for VM name update request.
 */
export interface VmUpdateNameRequestJson {
  name: string;
}

/**
 * Specification for VM backup restore request.
 */
export interface VmRestoreBackupRequestJson {
  time: number;
}

/**
 * Specification for VM media insertion request.
 */
export interface VmInsertMediaRequestJson {
  media: string;
}

/**
 * Specification for VM storage profile relocation request.
 */
export interface VmRelocationRequestJson {
  storage_profile: string;
}

/**
 * Specification for a VM disk request.
 */
export interface VmDiskRequestJson {
  name: string;
  disk_type: DiskType;
  size: number;
}

/**
 * Specification for a VM vnic request.
 */
export interface VmVnicRequestJson {
  primary_vnic: boolean;
  ip_address: string;
  ip_assignment: IpAddressingModeType;
  network_uuid: string;
  network_adapter_type: AdapterType;
}

/**
 * Specification for a Build VM request.
 */
export interface BuildVmRequestJson {
  name: string;
  description: string;
  vm_template_uuid: string | null;
  vapp_template_uuid: string | null;
  disks: Array<VmDiskRequestJson> | null;
  ram: number | null;
  number_of_cpus: number | null;
  cpu_cores_per_socket: number | null;
  hardware_version: number | null;
  operating_system_version: string | null;
  boot_delay: number | null;
  expose_cpu_virtualization: boolean;
  media_uuid: string | null;
  computer_name: string;
  storage_profile_uuid: string;
  vnics: Array<VmVnicRequestJson>;
}

/**
 * Specification for VM backup restore into vApp request.
 */
export interface VmRestoreBackupIntoVAppRequestJson {
  time: number;
  vapp_uuid: string;
}

/**
 * VM cpu count update request JSON
 */
export interface VmCpuCountUpdateRequestJson {
  cpus_number: number;
  cores_per_socket?: number;
}

/**
 * VM memory size update request JSON
 */
export interface VmMemorySizeUpdateRequestJson {
  memory_size: number;
}

/**
 * VM reconfigure request JSON
 */
export interface VmReconfigureRequestJson {
  name?: string;
  description?: string;
  cpu_spec?: VmCpuCountUpdateRequestJson;
  memory_spec?: VmMemorySizeUpdateRequestJson;
  disk_spec?: Array<VmDiskRequestJson>;
  guest_customization_section?: GuestCustomizationUpdateRequestJson;
  nested_hypervisor_enabled?: boolean;
}

/**
 * Vm Copy Move Vm Vnic Request JSON
 */
export interface VmCopyMoveVmVnicRequestJson {
  index: number;
  network_name: string;
  is_primary: boolean;
  ip_address: string;
  ip_addressing_mode: IpAddressingModeType;
}

/**
 * Vm Copy Move Request JSON
 */
export interface VmCopyMoveRequestJson {
  vapp_uuid: string;
  name?: string;
  storage_profile?: string;
  vnics?: Array<VmCopyMoveVmVnicRequestJson>;
}

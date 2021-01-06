import { DeviceTreeDetailsJson } from './device-tree-details-json';

/**
 * Logical volume JSON.
 */
export interface LogicalVolumeJson {
  device_root_node: DeviceTreeDetailsJson;
  group_name: string;
  name: string;
  group_uuid: string;
  uuid: string;
}

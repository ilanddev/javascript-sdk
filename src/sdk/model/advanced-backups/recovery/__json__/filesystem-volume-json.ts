import { LogicalVolumeType } from './logical-volume-type-enum';
import { LogicalVolumeJson } from './logical-volume-json';
import { DiskJson } from './disk-json';

/**
 * Filesystem volume JSON.
 */
export interface FilesystemVolumeJson {
  is_supported: boolean;
  disks: Array<DiskJson>;
  name: string;
  logical_volume?: LogicalVolumeJson;
  logical_volume_type: LogicalVolumeType;
  display_name: string;
  filesystem_uuid: string;
  filesystem_type: string;
}

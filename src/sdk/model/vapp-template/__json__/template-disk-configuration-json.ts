import { DiskType } from '../../common/__json__/disk-type';

/**
 * Template Disk Configuration JSON.
 */
export interface TemplateDiskConfigurationJson {
  name: string;
  size_in_bytes: number;
  disk_type: DiskType;
}

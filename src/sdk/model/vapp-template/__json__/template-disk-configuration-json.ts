import { DiskType } from '../../common';

/**
 * Template Disk Configuration JSON.
 */
export interface TemplateDiskConfigurationJson {
  name: string;
  size_in_bytes: number;
  disk_type: DiskType;
}

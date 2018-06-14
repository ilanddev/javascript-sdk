import { DiskType } from '../../../common';

/**
 * Interface for virtual disk properties JSON representation.
 */
export interface VirtualDiskJson {
  name: string;
  size: number;
  type: DiskType;
}

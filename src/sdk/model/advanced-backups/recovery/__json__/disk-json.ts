import { DiskFormat } from './disk-format-enum';
import { DiskBlockJson } from './disk-block-json';
import { PartitionTableFormat } from './partition-table-format-enum';
import { DiskPartitionJson } from './disk-partition-json';

/**
 * Disk JSON.
 */
export interface DiskJson {
  vmdk_size_bytes: number;
  vmdk_file_name: string;
  disk_format: DiskFormat;
  disk_blocks: Array<DiskBlockJson>;
  sector_size_bytes: number;
  partition_table_format: PartitionTableFormat;
  disk_partitions: Array<DiskPartitionJson>;
  uuid: string;
}

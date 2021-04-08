/**
 * Disk partition JSON.
 */
export interface DiskPartitionJson {
  number: number;
  type_uuid: string;
  offset_bytes: number;
  length_bytes: number;
  uuid?: string;
}

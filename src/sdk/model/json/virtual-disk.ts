/**
 * Interface for virtual disk properties JSON representation.
 */
export interface VirtualDiskJson {
  name: string;
  size: number;
  type: VirtualDiskType;
}

/**
 * Enumeration of possible Virtual Disk types.
 */
export type VirtualDiskType = 'LSI_LOGIC' |
    'LSI_LOGIC_SAS' |
    'PARA_VIRTUAL' |
    'BUS_LOGIC' |
    'SATA' |
    'IDE';

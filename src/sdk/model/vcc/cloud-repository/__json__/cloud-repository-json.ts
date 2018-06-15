import { WanAcceleratorJson } from '../../wan-accelerator/__json__/wan-accelerator-json';

/**
 * Interface for CloudRepository JSON properties.
 */
export interface CloudRepositoryJson {
  display_name: string;
  quota: number;
  used_quota: number;
  wan_accelerator_uuid: string | null;
  wan_accelerator: WanAcceleratorJson | null;
}

import { EntityJson } from '../../common/__json__/entity-json';
import { IpRangeJson } from '../../common/ip-range/__json__/ip-range-json';
import { NetworkFenceModeType } from '../../common/__json__/network-fence-mode-type';

/**
 * Interface for abstract Network JSON properties.
 */
export interface AbstractNetworkJson extends EntityJson {
  location_id: string;
  org_uuid: string;
  vdc_uuid: string;
  description: string;
  primary_dns: string;
  secondary_dns: string;
  dns_suffix: string;
  fence_mode: NetworkFenceModeType;
  gateway: string;
  netmask: string;
  ip_ranges: Array<IpRangeJson>;
  inherited: boolean;
  parent_network_uuid: string | null;
}

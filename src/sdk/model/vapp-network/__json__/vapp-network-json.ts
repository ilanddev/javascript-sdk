import { AbstractNetworkJson } from '../../internal-network/__json__/abstract-network-json';

/**
 * Interface for vApp Network JSON properties.
 */
export interface VappNetworkJson extends AbstractNetworkJson {
  vapp_uuid: string;
  router_external_ip: string;
}

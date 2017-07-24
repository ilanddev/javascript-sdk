import { AbstractNetworkJson } from './abstract-network';

/**
 * Interface for vApp Network JSON properties.
 */
export interface VappNetworkJson extends AbstractNetworkJson {
  vapp_uuid: string;
  router_external_ip: string;
}

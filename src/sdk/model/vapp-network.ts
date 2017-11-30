import { Iland } from '../iland';
import { AbstractNetwork } from './abstract-network';
import { VappNetworkJson } from './json/vapp-network';
import { EntityType } from './json/entity-type';

/**
 * vApp Network.
 */
export class VappNetwork extends AbstractNetwork {

  constructor(_json: VappNetworkJson) {
    super(_json);
  }

  /**
   * Gets an vApp network by UUID.
   * @param uuid vApp network UUID
   * @returns {Promise<VappNetwork>} promise that resolves with the vApp network
   */
  static async getVappNetwork(uuid: string): Promise<VappNetwork> {
    return Iland.getHttp().get(`/network/${uuid}`).then(function(response) {
      let json = response.data as VappNetworkJson;
      return new VappNetwork(json);
    });
  }

  /**
   * Gets the entity type.
   * @returns {EntityType}
   */
  get entityType(): EntityType {
    return 'VAPP_NETWORK';
  }

  /**
   * Gets the UUID of the vApp that the network is associated with.
   * @returns {string} vApp UUID
   */
  get vappUuid(): string | null {
    return (this._json as VappNetworkJson).vapp_uuid;
  }

  /**
   * If this is a NAT Routed network, gets the external IP of the router for the vApp Network edge gateway.
   * @returns {string} IP address
   */
  get routerExternalIp(): string {
    return (this._json as VappNetworkJson).router_external_ip;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VappNetworkJson} the API json object
   */
  get json(): VappNetworkJson {
    return Object.assign({}, this._json as VappNetworkJson);
  }

  /**
   * Refreshes the vApp network data by retrieving it from the API again.
   * @returns {Promise<VappNetwork>} promise that resolves with this object
   */
  async refresh(): Promise<VappNetwork> {
    let self = this;
    return Iland.getHttp().get(
        `/network/${self.uuid}`).then(function(response) {
          self._json = response.data as VappNetworkJson;
          return self;
        });
  }

}

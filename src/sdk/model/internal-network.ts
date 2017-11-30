import { InternalNetworkJson } from './json/internal-network';
import { Iland } from '../iland';
import { AbstractNetwork } from './abstract-network';
import { EntityType } from './json/entity-type';

/**
 * Internal Network.
 */
export class InternalNetwork extends AbstractNetwork {

  constructor(_json: InternalNetworkJson) {
    super(_json);
  }

  /**
   * Gets an internal network by UUID.
   * @param uuid internal network UUID
   * @returns {Promise<InternalNetwork>} promise that resolves with the internal network
   */
  static async getInternalNetwork(uuid: string): Promise<InternalNetwork> {
    return Iland.getHttp().get(`/network/${uuid}`).then(function(response) {
      let json = response.data as InternalNetworkJson;
      return new InternalNetwork(json);
    });
  }

  get entityType(): EntityType {
    return 'ORG_VDC_NETWORK';
  }

  /**
   * Gets the UUID of the edge gateway that the network is connected to, if its a NAT routed network or null otherwise.
   * @returns {string|null} edge gateway UUID or null
   */
  get edgeUuid(): string | null {
    return (this._json as InternalNetworkJson).edge_uuid;
  }

  /**
   * Indicates whether this network is shared with other vDCs within the same organization.
   * @returns {boolean} value
   */
  get shared(): boolean {
    return (this._json as InternalNetworkJson).shared;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {InternalNetworkJson} the API json object
   */
  get json(): InternalNetworkJson {
    return Object.assign({}, this._json as InternalNetworkJson);
  }

  /**
   * Refreshes the internal network data by retrieving it from the API again.
   * @returns {Promise<InternalNetwork>} promise that resolves with this object
   */
  async refresh(): Promise<InternalNetwork> {
    let self = this;
    return Iland.getHttp().get(
        `/network/${self.uuid}`).then(function(response) {
          self._json = response.data as InternalNetworkJson;
          return self;
        });
  }

}

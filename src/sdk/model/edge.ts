import { EdgeBackingConfigurationType, EdgeJson } from './json/edge';
import { Entity } from './entity';
import { EntityType } from './json/entity-type';
import { Iland } from '../iland';
import { EdgeInterface } from './edge-interface';

/**
 * Edge Gateway.
 */
export class Edge extends Entity {

  constructor(private _json: EdgeJson) {
    super(_json);
  }

  /**
   * Gets an Edge by UUID.
   * @param uuid Edge UUID
   * @returns {Promise<Edge>} promise that resolves with the Edge
   */
  static async getEdge(uuid: string): Promise<Edge> {
    return Iland.getHttp().get(`/edge/${uuid}`).then(function(response) {
      let json = response.data as EdgeJson;
      return new Edge(json);
    });
  }

  getEntityType(): EntityType {
    return 'EDGE';
  }

  /**
   * Gets the status of the Edge gateway.
   * @returns {string} status
   */
  getStatus(): EdgeStatus {
    return this._json.status === 1 ? 'UP' : 'DOWN';
  }

  /**
   * Gets the UUID of the associated vDC.
   * @returns {string} vDC UUID
   */
  getVdcUuid(): string {
    return this._json.vdc_uuid;
  }

  /**
   * Gets the UUID of the associated Org.
   * @returns {string} org UUID
   */
  getOrgUuid(): string {
    return this._json.org_uuid;
  }

  /**
   * Gets the Edges network interfaces.
   * @returns {[EdgeInterface]} array of interfaces
   */
  getInterfaces(): Array<EdgeInterface> {
    return this._json.interfaces.map((interfaceJson) => new EdgeInterface(interfaceJson));
  }

  /**
   * Indicates whether the edge is in backwards compatibility mode.
   * @returns {boolean} value
   */
  isInBackwardCompatibilityMode(): boolean {
    return this._json.backward_compatibility_mode;
  }

  /**
   * Gets the type of backing configuration.
   * @returns {EdgeBackingConfigurationType} backing configuration type
   */
  getBackingConfigurationType(): EdgeBackingConfigurationType {
    return this._json.gateway_backing_config;
  }

  /**
   * Indicates whether high availability mode is enabled.
   * @returns {boolean} value
   */
  isHighAvailabilityEnabled(): boolean {
    return this._json.high_availability_enabled;
  }

  /**
   * Indicates whether this edge is the default DNS relay route.
   * @returns {boolean} value
   */
  isDefaultDnsRelayRoute(): boolean {
    return this._json.default_dns_relay_route;
  }

  /**
   * Gets the data center location ID that the edge is associated with.
   * @returns {string} location ID
   */
  getLocationId(): string {
    return this._json.location_id;
  }

  /**
   * Gets the description.
   * @returns {string} description
   */
  getDescription(): string {
    return this._json.description;
  }

  /**
   * Gets the vCloud HREF.
   * @returns {string|null} vCloud HREF
   */
  getVcloudHref(): string | null {
    return this._json.vcloud_href;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {EdgeJson} the JSON representation
   */
  getJson(): EdgeJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Edge data by retrieving it from the API again.
   * @returns {Promise<Edge>} promise that resolves with this object
   */
  async refresh(): Promise<Edge> {
    let self = this;
    return Iland.getHttp().get(
        `/edge/${self.getUuid()}`).then(function(response) {
          self._json = response.data as EdgeJson;
          return self;
        });
  }

}

/**
 * Edge status enumeration.
 */
export type EdgeStatus = 'UP' | 'DOWN';

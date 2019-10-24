import { EdgeGatewayDhcpRelayServerJson } from './__json__/edge-gateway-dhcp-relay-server-json';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpRelayServer {

  constructor(private _json: EdgeGatewayDhcpRelayServerJson) {
  }

  /**
   * Get grouping object id.
   * @returns {string}
   */
  get groupingObjectId(): Array<string> {
    return this._json.grouping_object_id;
  }

  /**
   * Get ip addresses.
   * @returns {Array<string>}
   */
  get ipAddresses(): Array<string> {
    return this._json.ip_addresses;
  }

  /**
   * Get fqdn.
   * @returns {Array<string>}
   */
  get fqdn(): Array<string> {
    return this._json.fqdn;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpRelayServerJson}
   */
  get json(): EdgeGatewayDhcpRelayServerJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}

import { EdgeGatewayDhcpRelayJson } from './__json__/edge-gateway-dhcp-relay-json';
import { EdgeGatewayDhcpRelayServer } from './edge-gateway-dhcp-relay-server';
import { EdgeGatewayDhcpRelayAgent } from './edge-gateway-dhcp-relay-agent';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpRelay {

  constructor(private _json: EdgeGatewayDhcpRelayJson) {
  }

  /**
   * Get relay server.
   * @returns {EdgeGatewayDhcpRelayServer}
   */
  get relayServer(): EdgeGatewayDhcpRelayServer {
    return new EdgeGatewayDhcpRelayServer(this._json.relay_server);
  }

  /**
   * Get relay agents.
   * @returns {Array<EdgeGatewayDhcpRelayAgent>}
   */
  get relayAgents(): Array<EdgeGatewayDhcpRelayAgent> {
    return this._json.relay_agents.map(it => new EdgeGatewayDhcpRelayAgent(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpRelayJson}
   */
  get json(): EdgeGatewayDhcpRelayJson {
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

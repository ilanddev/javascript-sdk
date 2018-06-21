import { EdgeIpSecVpnTunnelJson } from './__json__/edge-ipsec-vpn-tunnel-json';
import { EdgeIpSecVpnSubnetJson } from './__json__/edge-ipsec-vpn-subnet-json';
import { IpSecVpnSubnet } from './ip-sec-vpn-subnet';
import { IpSecVpnPeer } from './ip-sec-vpn-peer';

/**
 * IpSecVpnTunnel class
 */
export class IpSecVpnTunnel {

  constructor(private _json: EdgeIpSecVpnTunnelJson) {
  }

  /**
   * Get name
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Get peer IP address
   * @returns {string | null}
   */
  get peerIpAddress(): string | null {
    return this._json.peer_ip_address;
  }

  /**
   * Get peer ID
   * @returns {string | null}
   */
  get peerId(): string | null {
    return this._json.peer_id;
  }

  /**
   * Get local ID
   * @returns {string | null}
   */
  get localId(): string | null {
    return this._json.local_id;
  }

  /**
   * Get local IP address
   * @returns {string | null}
   */
  get localIpAddress(): string | null {
    return this._json.local_ip_address;
  }

  /**
   * Get shared secret
   * @returns {string | null}
   */
  get sharedSecret(): string | null {
    return this._json.shared_secret;
  }

  /**
   * Check weather IpSecVpnTunnel shared secret is encrypted or not.
   * @returns {boolean | null}
   */
  get sharedSecretEncrypted(): boolean | null {
    return this._json.shared_secret_encrypted;
  }

  /**
   * Get encryption protocol
   * @returns {string | null}
   */
  get encryptionProtocol(): string | null {
    return this._json.encryption_protocol;
  }

  /**
   * Get mtu
   * @returns {number | null}
   */
  get mtu(): number | null {
    return this._json.mtu;
  }

  /**
   * Check weather IpSecVpnTunnel is enabled or not.
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Check weather IpSecVpnTunnel is operational or not.
   * @returns {boolean | null}
   */
  get operational(): boolean | null {
    return this._json.operational;
  }

  /**
   * Get error details
   * @returns {string | null}
   */
  get errorDetails(): string | null {
    return this._json.error_details;
  }

  /**
   * Get list of localSubnet
   * @returns {Array<IpSecVpnSubnet>}
   */
  get localSubnets(): Array<IpSecVpnSubnet> {
    return (this._json.local_subnets as Array<EdgeIpSecVpnSubnetJson>).map(subnet => new IpSecVpnSubnet(subnet));
  }

  /**
   * Get list of peerSubnet
   * @returns {Array<IpSecVpnSubnet>}
   */
  get peerSubnets(): Array<IpSecVpnSubnet> {
    return (this._json.peer_subnets as Array<EdgeIpSecVpnSubnetJson>).map(subnet => new IpSecVpnSubnet(subnet));
  }

  /**
   * Get vpn peer
   * @returns {IpSecVpnPeer | null}
   */
  get vpnPeer(): IpSecVpnPeer | null {
    return this._json.vpn_peer ? new IpSecVpnPeer(this._json.vpn_peer) : null;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeIpSecVpnTunnelJson}
   */
  get json(): EdgeIpSecVpnTunnelJson {
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

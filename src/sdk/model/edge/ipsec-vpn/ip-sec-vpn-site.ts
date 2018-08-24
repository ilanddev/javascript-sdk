import { IpSecVpnSiteJson } from './__json__/ip-sec-vpn-site-json';
import { EncryptionAlgorithm } from './__json__/encyrption-algorithm';
import { AuthenticationMode } from './__json__/authentication-mode';
import { DHGroup } from './__json__/dh-group';

export class IpSecVpnSite {

  constructor(private _json: IpSecVpnSiteJson) {
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
   * Check weather IpSecVpnTunnel is enabled or not.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
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
  get localIp(): string | null {
    return this._json.local_ip;
  }

  /**
   * Get peer ID
   * @returns {string | null}
   */
  get peerId(): string | null {
    return this._json.peer_id;
  }

  /**
   * Get peer IP address
   * @returns {string | null}
   */
  get peerIp(): string | null {
    return this._json.peer_ip;
  }

  /**
   * Get vpn's psk
   * @returns {string}
   */
  get psk(): string | null {
    return this._json.psk;
  }

  /**
   * Get encryption algorithm
   * @returns {EncryptionAlgorithm}
   */
  get encryptionAlgorithm(): EncryptionAlgorithm {
    return this._json.encryption_algorithm;
  }

  /**
   * Get authentication mode
   * @returns {AuthenticationMode}
   */
  get authenticationMode(): AuthenticationMode {
    return this._json.authentication_mode;
  }

  /**
   * Get enable pfs
   * @returns {boolean}
   */
  get enablePfs(): boolean {
    return this._json.enable_pfs;
  }

  /**
   * Get DH Group
   * @returns {DHGroup}
   */
  get dhGroup(): DHGroup {
    return this._json.dh_group;
  }

  /**
   * Get local subnets
   * @returns {Array<string>}
   */
  get localSubnets(): Array<string> {
    return this._json.local_subnets;
  }

  /**
   * Get peer subnets
   * @returns {Array<string>}
   */
  get peerSubnets(): Array<string> {
    return this._json.peer_subnets;
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {IpSecVpnSiteJson}
   */
  get json(): IpSecVpnSiteJson {
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

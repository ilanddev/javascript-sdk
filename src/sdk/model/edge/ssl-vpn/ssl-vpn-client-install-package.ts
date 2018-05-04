import { EdgeSslVpnClientInstallPackageJson, EdgeSslVpnGatewayJson } from './__json__/edge-ssl-vpn-json';
import { SslVpnGateway } from './ssl-vpn-gateway';

/**
 * SslVpnClientInstallPackage class
 */
export class SslVpnClientInstallPackage {

  constructor(private _json: EdgeSslVpnClientInstallPackageJson) {
  }

  /**
   * Get profile name
   * @returns {string | null}
   */
  get profileName(): string | null {
    return this._json.profile_name;
  }

  /**
   * Check weather to start client on login or not.
   * @returns {boolean | null}
   */
  get startClientOnLogin(): boolean | null {
    return this._json.start_client_on_login;
  }

  /**
   * Check weather we hide systray icon or not
   * @returns {boolean | null}
   */
  get hideSystrayIcon(): boolean | null {
    return this._json.hide_systray_icon;
  }

  /**
   * Check weather it should remember password
   * @returns {boolean | null}
   */
  get rememberPassword(): boolean | null {
    return this._json.remember_password;
  }

  /**
   * Check weather it activate silent mode operation or not.
   * @returns {boolean | null}
   */
  get silentModeOperation(): boolean | null {
    return this._json.silent_mode_operation;
  }

  /**
   * Check weather activate silent mode installation or not.
   * @returns {boolean | null}
   */
  get silentModeInstallation(): boolean | null {
    return this._json.silent_mode_installation;
  }

  /**
   * Check weather to hide network adaptor or not.
   * @returns {boolean | null}
   */
  get hideNetworkAdaptor(): boolean | null {
    return this._json.hide_network_adaptor;
  }

  /**
   * Check weather create desktop icon or not.
   * @returns {boolean | null}
   */
  get createDesktopIcon(): boolean | null {
    return this._json.create_desktop_icon;
  }

  /**
   * Check weather enforce server security certificate validation or not.
   * @returns {boolean | null}
   */
  get enforceServerSecurityCertValidation(): boolean | null {
    return this._json.enforce_server_security_cert_validation;
  }

  /**
   * Check weather create a linux client or not.
   * @returns {boolean | null}
   */
  get createLinuxClient(): boolean | null {
    return this._json.create_linux_client;
  }

  /**
   * Check weather create a mac client.
   * @returns {boolean | null}
   */
  get createMacClient(): boolean | null {
    return this._json.create_mac_client;
  }

  /**
   * Get description
   * @returns {string | null}
   */
  get description(): string | null {
    return this._json.description;
  }

  /**
   * Check weather its enabled or not
   * @returns {boolean | null}
   */
  get enabled(): boolean | null {
    return this._json.enabled;
  }

  /**
   * Get a list of gateways.
   * @returns {Array<SslVpnGateway>}
   */
  get gatewayList(): Array<SslVpnGateway> {
    return (this._json.gateway_list as Array<EdgeSslVpnGatewayJson>).map(gateway => new SslVpnGateway(gateway));
  }

  /**
   * Get the __json__ representation of this class.
   * @returns {EdgeSslVpnClientInstallPackageJson}
   */
  get json(): EdgeSslVpnClientInstallPackageJson {
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

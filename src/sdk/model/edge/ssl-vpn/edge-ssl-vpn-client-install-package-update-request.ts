import {
  EdgeSslVpnClientInstallPackageUpdateRequestJson
} from './__json__/edge-ssl-vpn-client-install-package-update-request-json';
import { EdgeSslVpnGatewayUpdateRequestJson } from './__json__/edge-ssl-vpn-gateway-update-request-json';
import { EdgeSslVpnGatewayUpdateRequest } from './edge-ssl-vpn-gateway-update-request';

/* istanbul ignore next: autogenerated */
export class EdgeSslVpnClientInstallPackageUpdateRequest {

  private readonly _json: EdgeSslVpnClientInstallPackageUpdateRequestJson;

  constructor(edgeSslVpnClientInstallPackageUpdateRequest: EdgeSslVpnClientInstallPackageUpdateRequest);
  constructor(edgeSslVpnClientInstallPackageUpdateRequestJson: EdgeSslVpnClientInstallPackageUpdateRequestJson);
  constructor(profileName: string, gatewayList: Array<EdgeSslVpnGatewayUpdateRequestJson>, startClientOnLogin: boolean,
              hideSystrayIcon: boolean, rememberPassword: boolean, silentModeOperation: boolean,
              silentModeInstallation: boolean, hideNetworkAdaptor: boolean, createDesktopIcon: boolean,
              enforceServerSecurityCertValidation: boolean, createLinuxClient: boolean, createMacClient: boolean,
              description: string, enabled: boolean);
  constructor(firstParam: string | EdgeSslVpnClientInstallPackageUpdateRequest |
      EdgeSslVpnClientInstallPackageUpdateRequestJson, gatewayList?: Array<EdgeSslVpnGatewayUpdateRequestJson>,
              startClientOnLogin?: boolean, hideSystrayIcon?: boolean, rememberPassword?: boolean,
              silentModeOperation?: boolean, silentModeInstallation?: boolean, hideNetworkAdaptor?: boolean,
              createDesktopIcon?: boolean, enforceServerSecurityCertValidation?: boolean, createLinuxClient?: boolean,
              createMacClient?: boolean, description?: string, enabled?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        profile_name: firstParam,
        gateway_list: gatewayList,
        start_client_on_login: startClientOnLogin,
        hide_systray_icon: hideSystrayIcon,
        remember_password: rememberPassword,
        silent_mode_operation: silentModeOperation,
        silent_mode_installation: silentModeInstallation,
        hide_network_adaptor: hideNetworkAdaptor,
        create_desktop_icon: createDesktopIcon,
        enforce_server_security_cert_validation: enforceServerSecurityCertValidation,
        create_linux_client: createLinuxClient,
        create_mac_client: createMacClient,
        description: description,
        enabled: enabled
      } as EdgeSslVpnClientInstallPackageUpdateRequestJson;
    } else if (firstParam instanceof EdgeSslVpnClientInstallPackageUpdateRequest) {
      // Copy constructor
      this._json = (firstParam as EdgeSslVpnClientInstallPackageUpdateRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as EdgeSslVpnClientInstallPackageUpdateRequestJson;
    }
  }

  /**
   * Get profile name.
   * @returns {string}
   */
  get profileName(): string {
    return this._json.profile_name;
  }

  /**
   * Get gateway list.
   * @returns {Array<EdgeSslVpnGatewayUpdateRequest>}
   */
  get gatewayList(): Array<EdgeSslVpnGatewayUpdateRequest> {
    return this._json.gateway_list.map((gateway) => new EdgeSslVpnGatewayUpdateRequest(gateway));
  }

  /**
   * Get start client on login.
   * @returns {boolean}
   */
  get startClientOnLogin(): boolean {
    return this._json.start_client_on_login;
  }

  /**
   * Get hide systray icon.
   * @returns {boolean}
   */
  get hideSystrayIcon(): boolean {
    return this._json.hide_systray_icon;
  }

  /**
   * Get remember password.
   * @returns {boolean}
   */
  get rememberPassword(): boolean {
    return this._json.remember_password;
  }

  /**
   * Get silent mode operation.
   * @returns {boolean}
   */
  get silentModeOperation(): boolean {
    return this._json.silent_mode_operation;
  }

  /**
   * Get silent mode installation.
   * @returns {boolean}
   */
  get silentModeInstallation(): boolean {
    return this._json.silent_mode_installation;
  }

  /**
   * Get hide network adaptor.
   * @returns {boolean}
   */
  get hideNetworkAdaptor(): boolean {
    return this._json.hide_network_adaptor;
  }

  /**
   * Get create desktop icon.
   * @returns {boolean}
   */
  get createDesktopIcon(): boolean {
    return this._json.create_desktop_icon;
  }

  /**
   * Get enforce server security cert validation.
   * @returns {boolean}
   */
  get enforceServerSecurityCertValidation(): boolean {
    return this._json.enforce_server_security_cert_validation;
  }

  /**
   * Get create linux client.
   * @returns {boolean}
   */
  get createLinuxClient(): boolean {
    return this._json.create_linux_client;
  }

  /**
   * Get create mac client.
   * @returns {boolean}
   */
  get createMacClient(): boolean {
    return this._json.create_mac_client;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeSslVpnClientInstallPackageUpdateRequestJson}
   */
  get json(): EdgeSslVpnClientInstallPackageUpdateRequestJson {
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
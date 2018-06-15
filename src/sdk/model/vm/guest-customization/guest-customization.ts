import { GuestCustomizationJson } from './__json__/guest-customization-json';

/**
 * VM Guest Customization
 */
export class GuestCustomization {
  protected _json: GuestCustomizationJson;

  constructor(guestCustomization: GuestCustomization);
  constructor(guestCustomizationJson: GuestCustomizationJson);
  constructor(firstParam: GuestCustomization | GuestCustomizationJson) {
    if (firstParam instanceof GuestCustomization) {
      // Copy constructor
      this._json = (firstParam as GuestCustomization).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as GuestCustomizationJson;
    }
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get change sid.
   * @returns {boolean}
   */
  get changeSid(): boolean {
    return this._json.change_sid;
  }

  /**
   * Get virtual machine id.
   * @returns {string}
   */
  get virtualMachineId(): string {
    return this._json.virtual_machine_id;
  }

  /**
   * Get join domain.
   * @returns {boolean}
   */
  get joinDomain(): boolean {
    return this._json.join_domain;
  }

  /**
   * Get use org settings.
   * @returns {boolean}
   */
  get useOrgSettings(): boolean {
    return this._json.use_org_settings;
  }

  /**
   * Get domain name.
   * @returns {string}
   */
  get domainName(): string {
    return this._json.domain_name;
  }

  /**
   * Get domain user name.
   * @returns {string}
   */
  get domainUserName(): string {
    return this._json.domain_user_name;
  }

  /**
   * Get domain user password.
   * @returns {string}
   */
  get domainUserPassword(): string {
    return this._json.domain_user_password;
  }

  /**
   * Get machine object ou.
   * @returns {string}
   */
  get machineObjectOu(): string {
    return this._json.machine_object_ou;
  }

  /**
   * Get admin password enabled.
   * @returns {boolean}
   */
  get adminPasswordEnabled(): boolean {
    return this._json.admin_password_enabled;
  }

  /**
   * Get admin password auto.
   * @returns {boolean}
   */
  get adminPasswordAuto(): boolean {
    return this._json.admin_password_auto;
  }

  /**
   * Get admin password.
   * @returns {string}
   */
  get adminPassword(): string {
    return this._json.admin_password;
  }

  /**
   * Get admin auto logon enabled.
   * @returns {boolean}
   */
  get adminAutoLogonEnabled(): boolean {
    return this._json.admin_auto_logon_enabled;
  }

  /**
   * Get admin auto logon count.
   * @returns {number}
   */
  get adminAutoLogonCount(): number {
    return this._json.admin_auto_logon_count;
  }

  /**
   * Get reset password required.
   * @returns {boolean}
   */
  get resetPasswordRequired(): boolean {
    return this._json.reset_password_required;
  }

  /**
   * Get computer name.
   * @returns {string}
   */
  get computerName(): string {
    return this._json.computer_name;
  }

  /**
   * Get required.
   * @returns {boolean}
   */
  get required(): boolean {
    return this._json.required;
  }

  /**
   * Get the json representation of this class.
   * @returns {GuestCustomizationJson}
   */
  get json(): GuestCustomizationJson {
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

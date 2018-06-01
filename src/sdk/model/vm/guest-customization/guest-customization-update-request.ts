import { GuestCustomizationUpdateRequestJson } from './__json__/guest-customization-update-request-json';

export class GuestCustomizationUpdateRequest {

  constructor(private _json: GuestCustomizationUpdateRequestJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Set enabled
   * @returns {boolean}
   */
  set enabled(enabled: boolean) {
    this._json.enabled = enabled;
  }

  /**
   * Get change sid.
   * @returns {boolean}
   */
  get changeSid(): boolean {
    return this._json.change_sid;
  }

  /**
   * Set change sid.
   * @param {boolean} chgangeSid
   */
  set changeSid(chgangeSid: boolean) {
    this._json.change_sid = chgangeSid;
  }

  /**
   * Get virtual machine id.
   * @returns {string}
   */
  get virtualMachineId(): string {
    return this._json.virtual_machine_id;
  }

  /**
   * Set virtual machine id.
   * @param {string} vmId
   */
  set virtualMachineId(vmId: string) {
    this._json.virtual_machine_id = vmId;
  }

  /**
   * Get join domain.
   * @returns {boolean}
   */
  get joinDomain(): boolean {
    return this._json.join_domain;
  }

  /**
   * Set join domain.
   * @param {boolean} joinDomain
   */
  set joinDomain(joinDomain: boolean) {
    this._json.join_domain = joinDomain;
  }

  /**
   * Get use org settings.
   * @returns {boolean}
   */
  get useOrgSettings(): boolean {
    return this._json.use_org_settings;
  }

  /**
   * Set use org settings.
   * @param {boolean} useOrgSettings
   */
  set useOrgSettings(useOrgSettings: boolean) {
    this._json.use_org_settings = useOrgSettings;
  }

  /**
   * Get domain name.
   * @returns {string}
   */
  get domainName(): string {
    return this._json.domain_name;
  }

  /**
   * Set domain name.
   * @param {string} name
   */
  set domainName(name: string) {
    this._json.domain_name = name;
  }

  /**
   * Get domain user name.
   * @returns {string}
   */
  get domainUserName(): string {
    return this._json.domain_user_name;
  }

  /**
   * Set domain user name.
   * @param {string} name
   */
  set domainUserName(name: string) {
    this._json.domain_user_name = name;
  }

  /**
   * Get domain user password.
   * @returns {string}
   */
  get domainUserPassword(): string {
    return this._json.domain_user_password;
  }

  /**
   * Set domain user password.
   * @param {string} pwd
   */
  set domainUserPassword(pwd: string) {
    this._json.domain_user_password = pwd;
  }

  /**
   * Get machine object ou.
   * @returns {string}
   */
  get machineObjectOu(): string {
    return this._json.machine_object_ou;
  }

  /**
   * Set machine object ou.
   * @param {string} machineObjectOu
   */
  set machineObjectOu(machineObjectOu: string) {
    this._json.machine_object_ou = machineObjectOu;
  }

  /**
   * Get admin password enabled.
   * @returns {boolean}
   */
  get adminPasswordEnabled(): boolean {
    return this._json.admin_password_enabled;
  }

  /**
   * Set admin password enabled.
   * @param {boolean} enabled
   */
  set adminPasswordEnabled(enabled: boolean) {
    this._json.admin_password_enabled = enabled;
  }

  /**
   * Get admin password auto.
   * @returns {boolean}
   */
  get adminPasswordAuto(): boolean {
    return this._json.admin_password_auto;
  }

  /**
   * Set admin password auto.
   * @param {boolean} auto
   */
  set adminPasswordAuto(auto: boolean) {
    this._json.admin_password_auto = auto;
  }

  /**
   * Get admin password.
   * @returns {string}
   */
  get adminPassword(): string {
    return this._json.admin_password;
  }

  /**
   * Set admin password.
   * @param {string} pwd
   */
  set adminPassword(pwd: string) {
    this._json.admin_password = pwd;
  }

  /**
   * Get admin auto logon enabled.
   * @returns {boolean}
   */
  get adminAutoLogonEnabled(): boolean {
    return this._json.admin_auto_logon_enabled;
  }

  /**
   * Set admin auto logon enabled.
   * @param {boolean} enabled
   */
  set adminAutoLogonEnabled(enabled: boolean) {
    this._json.admin_auto_logon_enabled = enabled;
  }

  /**
   * Get admin auto logon count.
   * @returns {number}
   */
  get adminAutoLogonCount(): number {
    return this._json.admin_auto_logon_count;
  }

  /**
   * Set admin auto logon count.
   * @param {number} count
   */
  set adminAutoLogonCount(count: number) {
    this._json.admin_auto_logon_count = count;
  }

  /**
   * Get reset password required.
   * @returns {boolean}
   */
  get resetPasswordRequired(): boolean {
    return this._json.reset_password_required;
  }

  /**
   * Set reset password required.
   * @param {boolean} required
   */
  set resetPasswordRequired(required: boolean) {
    this._json.reset_password_required = required;
  }

  /**
   * Get computer name.
   * @returns {string}
   */
  get computerName(): string {
    return this._json.computer_name;
  }

  /**
   * Set computer name.
   * @param {string} name
   */
  set computerName(name: string) {
    this._json.computer_name = name;
  }

  /**
   * Get required.
   * @returns {boolean}
   */
  get required(): boolean {
    return this._json.required;
  }

  /**
   * Set required.
   * @param {boolean} required
   */
  set required(required: boolean) {
    this._json.required = required;
  }

  /**
   * Get the json representation of this class.
   * @returns {GuestCustomizationUpdateRequestJson}
   */
  get json(): GuestCustomizationUpdateRequestJson {
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

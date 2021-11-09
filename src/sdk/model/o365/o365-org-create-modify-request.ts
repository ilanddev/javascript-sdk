import { O365OrgCreateModifyRequestJson } from './__json__/o365-org-create-modify-request-json';

/**
 * O365 Organization create / modify request object.
 */
/* istanbul ignore next: autogenerated */
export class O365OrgCreateModifyRequest {

  private readonly _json: O365OrgCreateModifyRequestJson;

  constructor(o365OrgCreateModifyRequest: O365OrgCreateModifyRequest);
  constructor(o365OrgCreateModifyRequestJson: O365OrgCreateModifyRequestJson);
  constructor(firstParam: string | O365OrgCreateModifyRequest | O365OrgCreateModifyRequestJson, account?: string,
              password?: string, useModernAuth?: boolean, applicationId?: string | null,
              applicationSecret?: string | null, useApplicationOnlyAuth?: boolean, userCode?: string | null,
              newApplicationName?: string | null, isExchangeOnline?: boolean, isTeamsOnline?: boolean,
              isSharePointOnline?: boolean, defaultJobs?: boolean) {
    if (typeof firstParam === 'string') {
      // parameters constructor
      this._json = {
        name: firstParam,
        account: account,
        password: password,
        use_modern_auth: useModernAuth,
        application_id: applicationId,
        application_secret: applicationSecret,
        use_application_only_auth: useApplicationOnlyAuth,
        user_code: userCode,
        new_application_name: newApplicationName,
        is_exchange_online: isExchangeOnline,
        is_teams_online: isTeamsOnline,
        is_share_point_online: isSharePointOnline,
        create_default_jobs: defaultJobs
      } as O365OrgCreateModifyRequestJson;
    } else if (firstParam instanceof O365OrgCreateModifyRequest) {
      // copy constructor
      this._json = (firstParam || O365OrgCreateModifyRequest).json;
    } else {
      // json or empty constructor
      this._json = (firstParam || {}) as O365OrgCreateModifyRequestJson;
    }
  }

  /**
   * Get the (optional) name of the Office 365 organization. If not provided,
   * it will be defaulted to [orgName].onmicrosoft.com
   * @returns {string | null}
   */
  get name(): string | null {
    return this._json.name;
  }

  /**
   * Get the user of the Office 365 online account. Optional for Modern App-Only Authentication.
   * @returns {string | undefined}
   */
  get account(): string | null {
    return this._json.account;
  }

  /**
   * Get the password of the Office 365 online account. Optional for Modern App-Only Authentication.
   * @returns {string}
   */
  get password(): string | null {
    return this._json.password;
  }

  /**
   * Get whether to use modern authentication. Required (set to true) when
   * useApplicationOnlyAuth is also set to true
   * @returns {boolean}
   */
  get useModernAuth(): boolean {
    return this._json.use_modern_auth;
  }

  /**
   * Get the identification number of the Azure AD application that you want to use
   * to access your O365 organization. Required only when useModernAuth is true.
   * @returns {string | null}
   */
  get applicationId(): string | null {
    return this._json.application_id;
  }

  /**
   * Get the application secret for the specified Azure AD application. Required only
   * when useModernAuth is true.
   * @returns {string | null}
   */
  get applicationSecret(): string | null {
    return this._json.application_secret;
  }

  /**
   * Get whether to use Azure AD application authentication.
   * @returns {boolean}
   */
  get useApplicationOnlyAuth(): boolean {
    return this._json.use_application_only_auth;
  }

  /**
   * Get the one time device code obtained from the Azure portal (https://microsoft.com/devicelogin).
   * Required for Modern App authentication method (useApplicationOnlyAuth = true).
   * @returns {string | null}
   */
  get userCode(): string | null {
    return this._json.user_code;
  }

  /**
   * Get the name for the new Azure AD application.
   * Required for Modern App authentication method (useApplicationOnlyAuth = true).
   * @returns {string | null}
   */
  get newApplicationName(): string | null {
    return this._json.new_application_name;
  }

  /**
   * Get isExchangeOnline.
   * @returns {boolean}
   */
  get isExchangeOnline(): boolean {
    return this._json.is_exchange_online;
  }

  /**
   * Get isTeamsOnline.
   * @returns {boolean}
   */
  get isTeamsOnline(): boolean {
    return this._json.is_teams_online;
  }

  /**
   * Get isSharePointOnline.
   * @returns {boolean}
   */
  get isSharePointOnline(): boolean {
    return this._json.is_share_point_online;
  }

  /**
   * Get create default jobs
   * @returns {boolean | null}
   */
  get createDefaultJobs(): boolean | null {
    return this._json.create_default_jobs;
  }

  /**
   * Get the json representation of this class.
   * @returns {O365OrgCreateModifyRequestJson}
   */
  get json(): O365OrgCreateModifyRequestJson {
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

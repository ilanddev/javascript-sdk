import { NessusScanUpdateJson } from './__json__/nessus-scan-update-json';

/**
 * Nessus Scan Update.
 */
/* istanbul ignore next: autogenerated */
export class NessusScanUpdate {

  constructor(private _json: NessusScanUpdateJson) {
  }

  /**
   * Get creation date.
   * @returns {number}
   */
  get creationDate(): number {
    return this._json.creation_date;
  }

  /**
   * Get custom targets.
   * @returns {string}
   */
  get customTargets(): string {
    return this._json.custom_targets;
  }

  /**
   * Get default permissions.
   * @returns {string}
   */
  get defaultPermissions(): string {
    return this._json.default_permissions;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get emails.
   * @returns {string}
   */
  get emails(): string {
    return this._json.emails;
  }

  /**
   * Get id.
   * @returns {number}
   */
  get id(): number {
    return this._json.id;
  }

  /**
   * Get last modification date.
   * @returns {number}
   */
  get lastModificationDate(): number {
    return this._json.last_modification_date;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get notification filter type.
   * @returns {string}
   */
  get notificationFilterType(): string {
    return this._json.notification_filter_type;
  }

  /**
   * Get notification filters.
   * @returns {string}
   */
  get notificationFilters(): string {
    return this._json.notification_filters;
  }

  /**
   * Get owner.
   * @returns {string}
   */
  get owner(): string {
    return this._json.owner;
  }

  /**
   * Get owner id.
   * @returns {number}
   */
  get ownerId(): number {
    return this._json.owner_id;
  }

  /**
   * Get policy id.
   * @returns {number}
   */
  get policyId(): number {
    return this._json.policy_id;
  }

  /**
   * Get rrules.
   * @returns {string}
   */
  get rrules(): string {
    return this._json.rrules;
  }

  /**
   * Get scanner id.
   * @returns {number}
   */
  get scannerId(): number {
    return this._json.scanner_id;
  }

  /**
   * Get shared.
   * @returns {number}
   */
  get shared(): number {
    return this._json.shared;
  }

  /**
   * Get start time.
   * @returns {string}
   */
  get startTime(): string {
    return this._json.start_time;
  }

  /**
   * Get tag id.
   * @returns {number}
   */
  get tagId(): number {
    return this._json.tag_id;
  }

  /**
   * Get timezone.
   * @returns {string}
   */
  get timezone(): string {
    return this._json.timezone;
  }

  /**
   * Get type.
   * @returns {string}
   */
  get type(): string {
    return this._json.type;
  }

  /**
   * Get user permissions.
   * @returns {number}
   */
  get userPermissions(): number {
    return this._json.user_permissions;
  }

  /**
   * Get uuid.
   * @returns {string}
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Get use dashboard.
   * @returns {boolean}
   */
  get useDashboard(): boolean {
    return this._json.use_dashboard;
  }

  /**
   * Get the json representation of this class.
   * @returns {NessusScanUpdateJson}
   */
  get json(): NessusScanUpdateJson {
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

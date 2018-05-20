import { EventJson, EventOwnerType, EventType } from './__json__';
import { Iland } from '../../iland';
import { EntityType } from '../common/__json__/entity-type';

/**
 * Event.
 */
export class Event {

  constructor(private _json: EventJson) {
  }

  /**
   * Gets an event by UUID.
   * @param uuid event UUID
   * @returns {Promise<Event>} promise that resolves with the Event
   */
  static async getEvent(uuid: string): Promise<Event> {
    return Iland.getHttp().get(`/events/${uuid}`).then((response) => {
      const json = response.data as EventJson;
      return new Event(json);
    });
  }

  /**
   * Gets the event UUID.
   * @returns {string} the UUID
   */
  get uuid(): string {
    return this._json.uuid;
  }

  /**
   * Gets the event owner type.
   * @returns {EventOwnerType} the owner type
   */
  get ownerType(): EventOwnerType {
    return this._json.owner_type;
  }

  /**
   * Gets the event owner ID.
   * @returns {string} the owner ID
   */
  get ownerId(): string {
    return this._json.owner_id;
  }

  /**
   * Gets the entity UUID.
   * @returns {string} the entity UUID
   */
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the entity type.
   * @returns {EntityType} the entity type
   */
  get entityType(): EntityType {
    return this._json.entity_type;
  }

  /**
   * Gets the entity name.
   * @returns {string} the entity name
   */
  get entityName(): string {
    return this._json.entity_name;
  }

  /**
   * Gets the event type.
   * @returns {EventType} the event type
   */
  get type(): EventType {
    return this._json.type;
  }

  /**
   * Gets the event timestamp.
   * @returns {Date} the event timestamp
   */
  get timestamp(): Date {
    return new Date(this._json.timestamp);
  }

  /**
   * Gets the UUID of the task that is associated with the event or null if not applicable.
   * @returns {string | null} the task UUID or null
   */
  get taskUuid(): string | null {
    return this._json.task_uuid ? this._json.task_uuid : null;
  }

  /**
   * Gets the username of the user who caused the event.
   * @returns {string} the username
   */
  get initiatedByUsername(): string {
    return this._json.initiated_by_username;
  }

  /**
   * Gets the full name of the user who caused the event.
   * @returns {string} the user's full name
   */
  get initiatedByFullName(): string {
    return this._json.initiated_by_full_name;
  }

  /**
   * Gets the string describing the event.
   * @returns {string} the event description
   */
  get details(): string {
    return this._json.details;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {EventJson} the API json object
   */
  get json(): EventJson {
    return Object.assign({}, this._json);
  }

}

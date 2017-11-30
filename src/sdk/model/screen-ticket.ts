import { ScreenTicketJson } from './json/screen-ticket';

/**
 * VM Screen Ticket.
 */
export class ScreenTicket {

  constructor(private _json: ScreenTicketJson) {
  }

  /**
   * Gets the VM ID attribute.
   * @returns {string} VM ID
   */
  get vmId(): string {
    return this._json.vm_id;
  }

  /**
   * Gets the ticket.
   * @returns {string}
   */
  get ticket(): string {
    return this._json.ticket;
  }

  /**
   * Gets the host.
   * @returns {string}
   */
  get host(): string {
    return this._json.host;
  }

  /**
   * Gets the SSL thumbprint.
   * @returns {string}
   */
  get sslThumbprint(): string {
    return this._json.ssl_thumbprint;
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
   * @returns {ScreenTicketJson} the JSON representation
   */
  get json(): ScreenTicketJson {
    return Object.assign({}, this._json);
  }

}

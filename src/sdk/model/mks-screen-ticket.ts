import { MksScreenTicketJson } from './json/mks-screen-ticket';

/**
 * VM MKS Screen Ticket.
 */
export class MksScreenTicket {

  constructor(private _json: MksScreenTicketJson) {
  }

  /**
   * Gets the VMX attribute.
   * @returns {string} vmx
   */
  get vmx(): string {
    return this._json.vmx;
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
   * Gets the port.
   * @returns {string}
   */
  get port(): string {
    return this._json.port;
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
   * @returns {MksScreenTicketJson} the JSON representation
   */
  get json(): MksScreenTicketJson {
    return Object.assign({}, this._json);
  }

}

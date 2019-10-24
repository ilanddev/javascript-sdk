import { EdgeGatewayDhcpRelayTypeOptionListJson } from './__json__/edge-gateway-dhcp-relay-type-option-list-json';
import { EdgeGatewayDhcpRelayTypeOption } from './edge-gateway-dhcp-relay-type-option';
import { EdgeGatewayDhcpRelayTypeOptionPagingParams } from './edge-gateway-dhcp-relay-type-option-paging-params';

/* istanbul ignore next: autogenerated */
export class EdgeGatewayDhcpRelayTypeOptionList {

  constructor(private _json: EdgeGatewayDhcpRelayTypeOptionListJson) {}

  /**
   * Get current page parameters.
   * @returns {EdgeGatewayDhcpRelayTypeOptionPagingParams}
   */
  get currentPageParameters(): EdgeGatewayDhcpRelayTypeOptionPagingParams {
    return new EdgeGatewayDhcpRelayTypeOptionPagingParams(this._json.current_page_parameters);
  }

  /**
   * Get next page parameters.
   * @returns {EdgeGatewayDhcpRelayTypeOptionPagingParams}
   */
  get nextPageParameters(): EdgeGatewayDhcpRelayTypeOptionPagingParams {
    return new EdgeGatewayDhcpRelayTypeOptionPagingParams(this._json.next_page_parameters);
  }

  /**
   * Get total records.
   * @returns {number}
   */
  get totalRecords(): number {
    return this._json.total_records;
  }

  /**
   * Get last page.
   * @returns {boolean}
   */
  get lastPage(): boolean {
    return this._json.last_page;
  }

  /**
   * Get data.
   * @returns {Array<EdgeGatewayDhcpRelayTypeOption>}
   */
  get data(): Array<EdgeGatewayDhcpRelayTypeOption> {
    return this._json.data.map(o => new EdgeGatewayDhcpRelayTypeOption(o));
  }

  /**
   * Get the json representation of this class.
   * @returns {EdgeGatewayDhcpRelayTypeOptionListJson}
   */
  get json(): EdgeGatewayDhcpRelayTypeOptionListJson {
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

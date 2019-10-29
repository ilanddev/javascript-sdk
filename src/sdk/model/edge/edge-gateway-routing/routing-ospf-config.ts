import { OSPFArea } from './ospf-area';
import { OSPFInterface } from './ospf-interface';
import { RoutingOSPFConfigJson } from './__json__/routing-ospf-config-json';
import { Redistribution } from './redistribution';

/**
 * Routing OSPF Configuration
 */
/* istanbul ignore next: autogenerated */
export class RoutingOSPFConfig {

  constructor(private _json: RoutingOSPFConfigJson) {
  }

  /**
   * Get enabled.
   * @returns {boolean}
   */
  get enabled(): boolean {
    return this._json.enabled;
  }

  /**
   * Get graceful restart.
   * @returns {boolean}
   */
  get gracefulRestart(): boolean {
    return this._json.graceful_restart;
  }

  /**
   * Get default originate.
   * @returns {boolean}
   */
  get defaultOriginate(): boolean {
    return this._json.default_originate;
  }

  /**
   * Get ospf areas.
   * @returns {Array<OSPFArea>}
   */
  get ospfAreas(): Array<OSPFArea> {
    return this._json.ospf_areas.map(it => new OSPFArea(it));
  }

  /**
   * Get ospf interfaces.
   * @returns {Array<OSPFInterface>}
   */
  get ospfInterfaces(): Array<OSPFInterface> {
    return this._json.ospf_interfaces.map(it => new OSPFInterface(it));
  }

  /**
   * Get redistribution response.
   * @returns {Redistribution}
   */
  get redistributionResponse(): Redistribution {
    return new Redistribution(this._json.redistribution_response);
  }

  /**
   * Get the json representation of this class.
   * @returns {RoutingOSPFConfigJson}
   */
  get json(): RoutingOSPFConfigJson {
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

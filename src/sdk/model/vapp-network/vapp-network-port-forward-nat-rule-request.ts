import { VappNetworkPortForwardNATRuleRequestJson } from './__json__';

/* istanbul ignore next: autogenerated */
export class VappNetworkPortForwardNATRuleRequest {

  private readonly _json: VappNetworkPortForwardNATRuleRequestJson;

  constructor(vappNetworkPortForwardNATRuleRequest: VappNetworkPortForwardNATRuleRequest);
  constructor(vappNetworkPortForwardNATRuleRequestJson: VappNetworkPortForwardNATRuleRequestJson);
  constructor(externalPort: string, forwardToPort: string, protocol: string, vmInterface: string, vmLocalId: string);
  constructor(firstParam: string | VappNetworkPortForwardNATRuleRequest | VappNetworkPortForwardNATRuleRequestJson,
              forwardToPort?: string, protocol?: string, vmInterface?: string, vmLocalId?: string) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        external_port: firstParam,
        forward_to_port: forwardToPort,
        protocol: protocol,
        vm_interface: vmInterface,
        vm_local_id: vmLocalId
      } as VappNetworkPortForwardNATRuleRequestJson;
    } else if (firstParam instanceof VappNetworkPortForwardNATRuleRequest) {
      // Copy constructor
      this._json = (firstParam as VappNetworkPortForwardNATRuleRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VappNetworkPortForwardNATRuleRequestJson;
    }
  }

  /**
   * Get external port.
   * @returns {string}
   */
  get externalPort(): string {
    return this._json.external_port;
  }

  /**
   * Get forward to port.
   * @returns {string}
   */
  get forwardToPort(): string {
    return this._json.forward_to_port;
  }

  /**
   * Get protocol.
   * @returns {string}
   */
  get protocol(): string {
    return this._json.protocol;
  }

  /**
   * Get vm interface.
   * @returns {string}
   */
  get vmInterface(): string {
    return this._json.vm_interface;
  }

  /**
   * Get vm local id.
   * @returns {string}
   */
  get vmLocalId(): string {
    return this._json.vm_local_id;
  }

  /**
   * Get the json representation of this class.
   * @returns {VappNetworkPortForwardNATRuleRequestJson}
   */
  get json(): VappNetworkPortForwardNATRuleRequestJson {
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

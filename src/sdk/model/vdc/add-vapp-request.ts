import { AddVappRequestJson } from '../vapp/__json__/vapp-json';
import { FenceModeRequestType } from '../common/__json__/fence-mode-request-type';
import { VmCreateRequestJson } from '../vm/__json__/vm-create-request-json';
import { VappNetworkInitializationParamsRequestJson } from
    '../vapp/__json__/vapp-network-initialization-params-request-json';
import { VappNetworkInitializationParamsRequest } from '../vapp/vapp-network-initialization-params-request-json';
import { VmCreateRequest } from '../vm/vm-create-request';

/**
 * Add vapp request.
 */
/* istanbul ignore next: autogenerated */
export class AddVappRequest {

  private readonly _json: AddVappRequestJson;

  constructor(addVappRequest: AddVappRequest);
  constructor(addVappRequestJson: AddVappRequestJson);
  constructor(vappTemplateUuid: string, name: string, description: string, fenceMode: FenceModeRequestType,
              vms: Array<VmCreateRequestJson>, vappNetwork: VappNetworkInitializationParamsRequestJson);
  constructor(firstParam: string | AddVappRequest | AddVappRequestJson, name?: string, description?: string,
              fenceMode?: FenceModeRequestType, vms?: Array<VmCreateRequestJson>,
              vappNetwork?: VappNetworkInitializationParamsRequestJson) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        vapp_template_uuid: firstParam,
        name: name,
        description: description,
        fence_mode: fenceMode,
        vms: vms,
        vapp_network: vappNetwork
      } as AddVappRequestJson;
    } else if (firstParam instanceof AddVappRequest) {
      // Copy constructor
      this._json = (firstParam as AddVappRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as AddVappRequestJson;
    }
  }

  /**
   * Get vapp template uuid.
   * @returns {string}
   */
  get vappTemplateUuid(): string {
    return this._json.vapp_template_uuid;
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string {
    return this._json.name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string {
    return this._json.description;
  }

  /**
   * Get fence mode.
   * @returns {FenceModeRequestType}
   */
  get fenceMode(): FenceModeRequestType {
    return this._json.fence_mode;
  }

  /**
   * Get vms.
   * @returns {Array<VmCreateRequest>}
   */
  get vms(): Array<VmCreateRequest> {
    return this._json.vms.map(vm => {
      return new VmCreateRequest(vm);
    });
  }

  /**
   * Get vapp network.
   * @returns {VappNetworkInitializationParamsRequest}
   */
  get vappNetwork(): VappNetworkInitializationParamsRequest {
    return new VappNetworkInitializationParamsRequest(this._json.vapp_network);
  }

  /**
   * Get the json representation of this class.
   * @returns {AddVappRequestJson}
   */
  get json(): AddVappRequestJson {
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

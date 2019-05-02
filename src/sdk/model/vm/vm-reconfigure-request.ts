import { VmCpuCountUpdateRequest } from './vm-cpu-count-update-request';
import { VmMemorySizeUpdateRequest } from './vm-memory-size-update-request';
import { GuestCustomizationUpdateRequest } from './guest-customization/guest-customization-update-request';
import {
  GuestCustomizationUpdateRequestJson
} from './guest-customization/__json__/guest-customization-update-request-json';
import {
    VirtualDiskRequestJson,
    VmCpuCountUpdateRequestJson,
    VmMemorySizeUpdateRequestJson,
    VmReconfigureRequestJson
} from './__json__/vm-json';

export class VmReconfigureRequest {

  private readonly _json: VmReconfigureRequestJson;

  constructor(vmReconfigureRequest: VmReconfigureRequest);
  constructor(vmReconfigureRequestJson: VmReconfigureRequestJson);
  constructor(name: string, description: string, cpuSpec: VmCpuCountUpdateRequestJson,
              memorySpec: VmMemorySizeUpdateRequestJson, diskSpec: Array<VirtualDiskRequestJson>,
              guestCustomizationSection: GuestCustomizationUpdateRequestJson, nestedHypervisorEnabled: boolean);
  constructor(firstParam: string | VmReconfigureRequest | VmReconfigureRequestJson, description?: string,
              cpuSpec?: VmCpuCountUpdateRequestJson, memorySpec?: VmMemorySizeUpdateRequestJson,
              diskSpec?: Array<VirtualDiskRequestJson>, guestCustomizationSection?: GuestCustomizationUpdateRequestJson,
              nestedHypervisorEnabled?: boolean) {
    if (typeof firstParam === 'string') {
      // Parameters constructor
      this._json = {
        name: firstParam,
        description: description,
        cpu_spec: cpuSpec,
        memory_spec: memorySpec,
        disk_spec: diskSpec,
        guest_customization_section: guestCustomizationSection,
        nested_hypervisor_enabled: nestedHypervisorEnabled
      } as VmReconfigureRequestJson;
    } else if (firstParam instanceof VmReconfigureRequest) {
      // Copy constructor
      this._json = (firstParam as VmReconfigureRequest).json;
    } else {
      // Json or empty constructor
      this._json = (firstParam || {}) as VmReconfigureRequestJson;
    }
  }

  /**
   * Get name.
   * @returns {string}
   */
  get name(): string | undefined {
    return this._json.name;
  }

  /**
   * Set name.
   * @param {string} name
   */
  set name(name: string | undefined) {
    this._json.name = name;
  }

  /**
   * Get description.
   * @returns {string}
   */
  get description(): string | undefined {
    return this._json.description;
  }

  /**
   * Set description.
   * @param {string} description
   */
  set description(description: string | undefined) {
    this._json.description = description;
  }

  /**
   * Get cpu spec.
   * @returns {VmCpuCountUpdateRequest}
   */
  get cpuSpec(): VmCpuCountUpdateRequest | undefined {
    return this._json.cpu_spec ? new VmCpuCountUpdateRequest(this._json.cpu_spec) : this._json.cpu_spec;
  }

  /**
   * Set cpu spec.
   * @param {VmCpuCountUpdateRequest} cpuSpec
   */
  set cpuSpec(cpuSpec: VmCpuCountUpdateRequest | undefined) {
    this._json.cpu_spec = cpuSpec ? cpuSpec.json : undefined;
  }

  /**
   * Get memory spec.
   * @returns {VmMemorySizeUpdateRequest}
   */
  get memorySpec(): VmMemorySizeUpdateRequest | undefined {
    return this._json.memory_spec ? new VmMemorySizeUpdateRequest(this._json.memory_spec) : this._json.memory_spec;
  }

  /**
   * Set memory spec.
   * @param {VmMemorySizeUpdateRequest} spec
   */
  set memorySpec(spec: VmMemorySizeUpdateRequest | undefined) {
    this._json.memory_spec = spec ? spec.json : undefined;
  }

  /**
   * Get disk spec.
   * @returns {Array<VmDiskRequestJson>}
   */
  get diskSpec(): Array<VirtualDiskRequestJson> | undefined {
    return this._json.disk_spec;
  }

  /**
   * Set disk spec.
   * @param {Array<VmDiskRequestJson>} spec
   */
  set diskSpec(spec: Array<VirtualDiskRequestJson> | undefined) {
    this._json.disk_spec = spec;
  }

  /**
   * Get guest customization section.
   * @returns {GuestCustomizationUpdateRequest}
   */
  get guestCustomizationSection(): GuestCustomizationUpdateRequest | undefined {
    return this._json.guest_customization_section ?
      new GuestCustomizationUpdateRequest(this._json.guest_customization_section) :
      this._json.guest_customization_section;
  }

  /**
   * Set guest customization section.
   * @param {GuestCustomizationUpdateRequest} request
   */
  set guestCustomizationSection(request: GuestCustomizationUpdateRequest | undefined) {
    this._json.guest_customization_section = request ? request.json : undefined;
  }

  /**
   * Get nested hypervisor enabled.
   * @returns {boolean}
   */
  get nestedHypervisorEnabled(): boolean | undefined {
    return this._json.nested_hypervisor_enabled;
  }

  /**
   * Set nested hypervisor enabled.
   * @param {boolean} enabled
   */
  set nestedHypervisorEnabled(enabled: boolean | undefined) {
    this._json.nested_hypervisor_enabled = enabled;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmReconfigureRequestJson}
   */
  get json(): VmReconfigureRequestJson {
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

import { VdcSummaryJson } from './__json__/vdc-json';

/**
 * vDC Summary.
 */
export class VdcSummary {

  constructor(private _json: VdcSummaryJson) {
  }

  /**
   * Gets the number of vApps for the vDC
   * @returns {number}
   */
  get numberOfVapps(): number {
    return this._json.number_of_vapps;
  }

  /**
   * Gets the number of VMs for the vDC
   * @returns {number}
   */
  get numberOfVms(): number {
    return this._json.number_of_vms;
  }

  /**
   * Gets the allocated cpu for the vDC
   * @returns {number}
   */
  get allocationCpu(): number {
    return this._json.allocation_cpu;
  }

  /**
   * Gets the allocated memory for the vDC
   * @returns {number}
   */
  get allocationMemory(): number {
    return this._json.allocation_memory;
  }

  /**
   * Gets the configured cpu for the vDC
   * @returns {number}
   */
  get configuredCpu(): number {
    return this._json.configured_cpu;
  }

  /**
   * Gets the configured memory for the vDC
   * @returns {number}
   */
  get configuredMemory(): number {
    return this._json.configured_memory;
  }

  /**
   * Gets the configured disk for the vDC
   * @returns {number}
   */
  get configuredDisk(): number {
    return this._json.configured_disk;
  }

  /**
   * Gets the reserved cpu for the vDC
   * @returns {number}
   */
  get reservedCpu(): number {
    return this._json.reserved_cpu;
  }

  /**
   * Gets the reserved memory for the vDC
   * @returns {number}
   */
  get reservedMem(): number {
    return this._json.reserved_mem;
  }

  /**
   * Gets the consumed cpu for the vDC
   * @returns {number}
   */
  get consumedCpu(): number {
    return this._json.consumed_cpu;
  }

  /**
   * Gets the consumed memory for the vDC
   * @returns {number}
   */
  get consumedMem(): number {
    return this._json.consumed_mem;
  }

  /**
   * Gets the consumed disk for the vDC
   * @returns {number}
   */
  get consumedDisk(): number {
    return this._json.consumed_disk;
  }

  /**
   * Gets the provisioned disk for the vDC
   * @returns {number}
   */
  get provisionedDisk(): number {
    return this._json.provisioned_disk;
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
   * @returns {VdcSummaryJson} the JSON representation
   */
  get json(): VdcSummaryJson {
    return Object.assign({}, this._json);
  }

}

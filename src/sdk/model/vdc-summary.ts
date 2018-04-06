import { VdcSummaryJson } from './json/vdc';

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
    return this._json.numberOfVapps;
  }

  /**
   * Gets the number of VMs for the vDC
   * @returns {number}
   */
  get numberOfVms(): number {
    return this._json.numberOfVms;
  }

  /**
   * Gets the allocated cpu for the vDC
   * @returns {number}
   */
  get allocationCpu(): number {
    return this._json.alloc_cpu;
  }

  /**
   * Gets the allocated memory for the vDC
   * @returns {number}
   */
  get allocationMemory(): number {
    return this._json.alloc_mem;
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
    return this._json.configured_mem;
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
    return this._json.reservedCpu;
  }

  /**
   * Gets the reserved memory for the vDC
   * @returns {number}
   */
  get reservedMem(): number {
    return this._json.reservedMem;
  }

  /**
   * Gets the consumed cpu for the vDC
   * @returns {number}
   */
  get consumedCpu(): number {
    return this._json.consumedCpu;
  }

  /**
   * Gets the consumed memory for the vDC
   * @returns {number}
   */
  get consumedMem(): number {
    return this._json.consumedMem;
  }

  /**
   * Gets the consumed disk for the vDC
   * @returns {number}
   */
  get consumedDisk(): number {
    return this._json.consumedDisk;
  }

  /**
   * Gets the provisioned disk for the vDC
   * @returns {number}
   */
  get provisionedDisk(): number {
    return this._json.provisionedDisk;
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

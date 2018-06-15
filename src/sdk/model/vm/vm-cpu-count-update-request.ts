import { VmCpuCountUpdateRequestJson } from './__json__/vm-json';

/**
 * VM Cpu Update Request.
 */
export class VmCpuCountUpdateRequest {

  constructor(private _json: VmCpuCountUpdateRequestJson) {
  }

  /**
   * Get number of cpus.
   * @returns {number}
   */
  get numberOfCpus(): number {
    return this._json.number_of_cpus;
  }

  /**
   * Set number of cpus.
   * @param {number} count
   */
  set numberOfCpus(count: number) {
    this._json.number_of_cpus = count;
  }

  /**
   * Get cores per socket.
   * @returns {number}
   */
  get coresPerSocket(): number | undefined {
    return this._json.cores_per_socket;
  }

  /**
   * Set cores per socket.
   * @param {number} count
   */
  set coresPerSocket(count: number | undefined) {
    this._json.cores_per_socket = count;
  }

  /**
   * Get the json representation of this class.
   * @returns {VmCpuCountUpdateRequestJson}
   */
  get json(): VmCpuCountUpdateRequestJson {
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

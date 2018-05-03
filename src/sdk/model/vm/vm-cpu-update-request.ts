import { VmCpuUpdateRequestJson } from './__json__/vm-json';

/**
 * VM Cpu Update Request.
 */
export class VmCpuUpdateRequest {

  /**
   * Creaets a new VM CPU update request.
   * @param {number} numberOfCpus the number of CPUs
   * @param {number} coresPerSocket the number of cores per socket
   */
  constructor(public numberOfCpus: number, public coresPerSocket?: number) {
  }

  /**
   * Gets JSON API representation.
   * @returns {VmCpuUpdateRequestJson} the JSON API representation
   */
  get json(): VmCpuUpdateRequestJson {
    return {
      cpus_number: this.numberOfCpus,
      cores_per_socket: this.coresPerSocket
    };
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this.json, undefined, 2);
  }

}

import { VmCreateSnapshotRequestJson } from '../__json__/vm-json';

/**
 * VM Create Snapshot Request.
 */
export class VmCreateSnapshotRequest {

  /**
   * Creates a new VM snapshot creation requeset.
   * @param {string} name the snapshot name
   * @param {string} description the snapshot description
   * @param {boolean} memory whether to snapshot the VM's memory
   * @param {boolean} quiesce whether to quiesce the filesystem before taking the snapshot
   */
  constructor(public name: string, public description: string, public memory: boolean, public quiesce: boolean) {
  }

  /**
   * Gets JSON API representation.
   * @returns {VmCreateSnapshotRequestJson} the JSON API representation
   */
  get json(): VmCreateSnapshotRequestJson {
    return {
      name: this.name,
      description: this.description,
      memory: this.memory,
      quiesce: this.quiesce
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

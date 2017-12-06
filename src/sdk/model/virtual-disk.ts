import { VirtualDiskJson, VirtualDiskType } from './json/virtual-disk';

/**
 * Virtual Disk.
 */
export class VirtualDisk {

  constructor(private _apiDisk: VirtualDiskJson) {
  }

  /**
   * Gets the name of the virtual disk.
   * @returns {string} the name
   */
  get name(): string {
    return this._apiDisk.name;
  }

  /**
   * Gets the size of the virtual disk in MB.
   * @returns {number} size in MB
   */
  get size(): number {
    return this._apiDisk.size;
  }

  /**
   * Gets the Virtual Hard Disk type.
   * @returns {VirtualDiskType} the type
   */
  get type(): VirtualDiskType {
    return this._apiDisk.type;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiDisk, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VirtualDiskJson} the API virtual disk object
   */
  get json(): VirtualDiskJson {
    return Object.assign({}, this._apiDisk);
  }

}

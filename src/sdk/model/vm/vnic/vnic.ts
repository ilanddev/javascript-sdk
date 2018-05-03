import { VnicAddressMode, VnicJson } from './__json__/vnic-json';

/**
 * Virtual Network Interface Card.
 */
export class Vnic {

  constructor(private _apiVnic: VnicJson) {
  }

  /**
   * Gets the type of the adapter.
   * @returns {string} adapter type
   */
  get adapterType(): string {
    return this._apiVnic.adapter_type;
  }

  /**
   * Gets the address mode of the adapter.
   * @returns {string} address mode
   */
  get addressMode(): VnicAddressMode {
    return this._apiVnic.ip_addressing_mode;
  }

  /**
   * Indicates whether the VNIC is currently connected.
   * @returns {boolean} value
   */
  get isConnected(): boolean {
    return this._apiVnic.is_connected;
  }

  /**
   * Indicates whether the VNIC is deleted.
   * @returns {boolean} value
   */
  get deleted(): boolean {
    return this._apiVnic.deleted;
  }

  /**
   * Gets the IP address that is assigned to the VNIC.
   * @returns {string} IP Address
   */
  get ipAddress(): string {
    return this._apiVnic.ip_address;
  }

  /**
   * Gets the MAC address that is assigned to the VNIC.
   * @returns {string} MAC address
   */
  get macAddress(): string {
    return this._apiVnic.mac_address;
  }

  /**
   * Gets the name of the network that the VNIC is connected to.
   * @returns {string} vApp network name
   */
  get connectedNetworkName(): string {
    return this._apiVnic.network_name;
  }

  /**
   * Indicates whether this is the VM's primary VNIC.
   * @returns {boolean} value
   */
  get primaryConnection(): boolean {
    return this._apiVnic.is_primary;
  }

  /**
   * Gets the ID of the VNIC among other VNICs connected to the VM.
   * @returns {number} VNIC ID
   */
  get vnicId(): number {
    return this._apiVnic.vnic_id;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._apiVnic, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {VnicJson} the API VNIC object
   */
  get json(): VnicJson {
    return Object.assign({}, this._apiVnic);
  }

}

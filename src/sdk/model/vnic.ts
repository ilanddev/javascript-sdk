import {ApiVnic} from './api-spec/api-vnic';

/**
 * Virtual Network Interface Card.
 */
export class Vnic {

  constructor(private _apiVnic: ApiVnic) {
  }

  /**
   * Gets the type of the adapter.
   * @returns {string} adapter type
   */
  getAdapterType(): string {
    return this._apiVnic.adapter_type;
  }

  /**
   * Gets the address mode of the adapter.
   * @returns {string} address mode
   */
  getAddressMode(): string {
    return this._apiVnic.address_mode;
  }

  /**
   * Indicates whether the VNIC is currently connected.
   * @returns {boolean} value
   */
  isConnected(): boolean {
    return this._apiVnic.connected;
  }

  /**
   * Indicates whether the VNIC is deleted.
   * @returns {boolean} value
   */
  isDeleted(): boolean {
    return this._apiVnic.deleted;
  }

  /**
   * Gets the IP address that is assigned to the VNIC.
   * @returns {string} IP Address
   */
  getIpAddress(): string {
    return this._apiVnic.ip_addr;
  }

  /**
   * Gets the MAC address that is assigned to the VNIC.
   * @returns {string} MAC address
   */
  getMacAddress(): string {
    return this._apiVnic.mac_addr;
  }

  /**
   * Gets the name of the network that the VNIC is connected to.
   * @returns {string} vApp network name
   */
  getConnectedNetworkName(): string {
    return this._apiVnic.net_name;
  }

  /**
   * Indicates whether this is the VM's primary VNIC.
   * @returns {boolean} value
   */
  isPrimaryConnection(): boolean {
    return this._apiVnic.primary_cnx;
  }

  /**
   * Gets the ID of the VNIC among other VNICs connected to the VM.
   * @returns {number} VNIC ID
   */
  getVnicId(): number {
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
   * @returns {ApiVnic} the API VNIC object
   */
  getJson(): ApiVnic {
    return Object.assign({}, this._apiVnic);
  }

}

import { BillJson, CurrencyCode } from './json/bill';
import { BillLineItem } from './bill-line-item';
import { EntityType } from './json/entity-type';

/**
 * Bill Ticket.
 */
export class Bill {

  constructor(private _json: BillJson) {
  }

  /**
   * Gets the UUID of the entity that the bill is associated with.
   * @returns {string} entity UUID
   */
  getEntityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the total cost.
   * @returns {number} total
   */
  getTotalCost(): number {
    return this._json.total;
  }

  /**
   * Gets the cost of CPU.
   * @returns {number} cpu cost
   */
  getCpuCost(): number {
    return this._json.cpu;
  }

  /**
   * Gets the cost of bandwidth.
   * @returns {number} bandwidth cost
   */
  getBandwidthCost(): number {
    return this._json.bandwidth;
  }

  /**
   * Gets the cost of memory.
   * @returns {number} memory cost
   */
  getMemoryCost(): number {
    return this._json.mem;
  }

  /**
   * Gets an estimate of what the cost could be at the end of the billing period.
   * @returns {number} estimated cost
   */
  getEstimatedCost(): number {
    return this._json.estimate;
  }

  /**
   * Gets the CPU usage.
   * @returns {number} cpu usage
   */
  getCpuUsage(): number {
    return this._json.cpu_usage;
  }

  /**
   * Gets the CPU burst usage.
   * @returns {number} cpu burst usage
   */
  getCpuBurstUsage(): number {
    return this._json.cpu_burst_usage;
  }

  /**
   * Gets the CPU reserved usage.
   * @returns {number} cpu reserved usage
   */
  getCpuReservedUsage(): number {
    return this._json.cpu_res_usage;
  }

  /**
   * Gets the memory usage.
   * @returns {number} memory usage
   */
  getMemoryUsage(): number {
    return this._json.mem_usage;
  }

  /**
   * Gets the reserved memory usage.
   * @returns {number} reserved memory usage
   */
  getMemoryReservedUsage(): number {
    return this._json.mem_res_usage;
  }

  /**
   * Gets the burst memory usage.
   * @returns {number} burst memory usage
   */
  getMemoryBurstUsage(): number {
    return this._json.mem_burst_usage;
  }

  /**
   * Gets the bandwidth usage.
   * @returns {number} bandwidth usage
   */
  getBandwidthUsage(): number {
    return this._json.bandwidth_usage;
  }

  /**
   * Gets the burst CPU cost.
   * @returns {number} burst cpu cost
   */
  getCpuBurstCost(): number {
    return this._json.cpu_burst;
  }

  /**
   * Gets the burst memory cost.
   * @returns {number} burst memory cost
   */
  getMemoryBurstCost(): number {
    return this._json.mem_burst;
  }

  /**
   * Gets the burst bandwidth cost.
   * @returns {number} burst bandwidth cost
   */
  getBandwidthBurstCost(): number {
    return this._json.bandwidth_burst;
  }

  /**
   * Gets the currency code.
   * @returns {CurrencyCode} the currency code
   */
  getCurrencyCode(): CurrencyCode {
    return this._json.currency_code;
  }

  /**
   * Gets the timestamp of the bill.
   * @returns {Date} the bill timestamp
   */
  getTimestamp(): Date {
    return new Date(this._json.time);
  }

  /**
   * Indicates whether this is a test drive.
   * @returns {boolean} value
   */
  isTestDrive(): boolean {
    return this._json.test_drive;
  }

  /**
   * Gets the line items.
   * @returns {Array<BillLineItem>} line items
   */
  getLineItems(): Array<BillLineItem> {
    return this._json.line_items.map(json => new BillLineItem(json));
  }

  /**
   * Gets the discount factor.
   * @returns {number} discount
   */
  getDiscount(): number {
    return this._json.discount;
  }

  /**
   * Gets the disk usage for the billing period.
   * @returns {number} disk usage
   */
  getDiskUsage(): number {
    return this._json.disk_usage;
  }

  /**
   * Gets the disk cost for the billing period.
   * @returns {number} disk cost
   */
  getDiskCost(): number {
    return this._json.disk;
  }

  /**
   * Gets the disk burst usage for the billing period.
   * @returns {number} disk burst usage
   */
  getDiskBurstUsage(): number {
    return this._json.disk_burst_usage;
  }

  /**
   * Gets the disk burst cost for the billing period.
   * @returns {number} disk burst cost
   */
  getDiskBurstCost(): number {
    return this._json.disk_burst;
  }

  /**
   * Gets the hard drive storage usage for the billing period.
   * @returns {number} hard drive storage usage
   */
  getHddStorageUsage(): number {
    return this._json.hdd_usage;
  }

  /**
   * Gets the hard drive storage usage for the billing period.
   * @returns {number} hard drive storage usage
   */
  getHddStorageCost(): number {
    return this._json.hdd_cost;
  }

  /**
   * Gets the hard drive storage burst cost for the billing period.
   * @returns {number} hard drive storage burst cost.
   */
  getHddStorageBurstCost(): number {
    return this._json.hdd_burst_cost;
  }

  /**
   * Gets the hard drive storage reserved cost for the billing period.
   * @returns {number} hard drive storage reserved cost.
   */
  getHddStorageReservedCost(): number {
    return this._json.hdd_reserved_cost;
  }

  /**
   * Gets the hard drive storage reserved usage.
   * @returns {number} hard drive storage reserved usage.
   */
  getHddStorageReservedUsage(): number {
    return this._json.hdd_reserved_usage;
  }

  /**
   * Gets the solid state storage reserved usage.
   * @returns {number} solid state storage reserved usage.
   */
  getSsdStorageReservedUsage(): number {
    return this._json.ssd_reserved_usage;
  }

  /**
   * Gets the solid state storage reserved cost.
   * @returns {number} solid state storage reserved cost.
   */
  getSsdStorageReservedCost(): number {
    return this._json.ssd_reserved_cost;
  }

  /**
   * Gets the solid state storage usage.
   * @returns {number} solid state storage usage.
   */
  getSsdStorageUsage(): number {
    return this._json.ssd_usage;
  }

  /**
   * Gets the solid state storage cost.
   * @returns {number} solid state storage cost
   */
  getSsdStorageCost(): number {
    return this._json.ssd_cost;
  }

  /**
   * Gets the solid state storage burst usage.
   * @returns {number} solid state storge burst usage
   */
  getSsdStorageBurstUsage(): number {
    return this._json.ssd_burst_usage;
  }

  /**
   * Gets the solid state storage burst cost.
   * @returns {number} solid state storage burst cost
   */
  getSsdStorageBurstCost(): number {
    return this._json.ssd_burst_cost;
  }

  /**
   * Gets the archive storage usage.
   * @returns {number} archive storage usage
   */
  getArchiveStorageUsage(): number {
    return this._json.archive_usage;
  }

  /**
   * Gets the archive storage cost.
   * @returns {number} archive storage cost
   */
  getArchiveStorageCost(): number {
    return this._json.archive_cost;
  }

  /**
   * Gets the archive storage burst usage.
   * @returns {number} archive storage burst usage
   */
  getArchiveStorageBurstUsage(): number {
    return this._json.archive_burst_usage;
  }

  /**
   * Gets the archive storage burst cost.
   * @returns {number} archive storage burst cost
   */
  getArchiveStorageBurstCost(): number {
    return this._json.archive_burst_cost;
  }

  /**
   * Gets the archive storage reserved cost.
   * @returns {number} archive storage reserved cost
   */
  getArchiveStorageReservedCost(): number {
    return this._json.archive_reserved_cost;
  }

  /**
   * Gets the archive storage reserved usage.
   * @returns {number} archive storage reserved usage
   */
  getArchiveStorageReservedUsage(): number {
    return this._json.archive_reserved_usage;
  }

  /**
   * Gets the zerto archive storage usage.
   * @returns {number} zerto archive storage usage
   */
  getZertoArchiveStorageUsage(): number {
    return this._json.zerto_archive_usage;
  }

  /**
   * Gets the zerto archive storage cost.
   * @returns {number} zerto archive storage cost
   */
  getZertoArchiveStorageCost(): number {
    return this._json.zerto_archive_cost;
  }

  /**
   * Gets the zerto advanced storage cost.
   * @returns {number} zerto advanced storage cost
   */
  getZertoAdvancedStorageCost(): number {
    return this._json.zerto_advanced_cost;
  }

  /**
   * Gets the zerto advanced storage usage.
   * @returns {number} zerto advanced storage usage
   */
  getZertoAdvancedStorageUsage(): number {
    return this._json.zerto_advanced_usage;
  }

  /**
   * Gets the entity type that the bill is associated with.
   * @returns {EntityType} entity type
   */
  getEntityType(): EntityType {
    return this._json.entity_type;
  }

  /**
   * Gets the name of the entity that the bill is associated with.
   * @returns {string} entity name
   */
  getEntityName(): string {
    return this._json.entity_name;
  }

  /**
   * Gets the bandwidth reserved usage.
   * @returns {number} bandwidth reserved usage
   */
  getBandwidthReservedUsage(): number {
    return this._json.bandwidth_reserved_usage;
  }

  /**
   * Gets the bandwidth reserved cost.
   * @returns {number} bandwidth reserved cost
   */
  getBandwidthReservedCost(): number {
    return this._json.bandwidth_reserved_cost;
  }

  /**
   * Gets the bandwidth burst usage.
   * @returns {number} bandwidth burst usage
   */
  getBandwidthBurstUsage(): number {
    return this._json.bandwidth_burst_usage;
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
   * @returns {BillJson} the JSON representation
   */
  getJson(): BillJson {
    return Object.assign({}, this._json);
  }

}

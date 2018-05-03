import { BillLineItem } from './bill-line-item';
import { BillJson } from './__json__/bill-json';
import { CurrencyCode } from './__json__/currency-code-type';
import { EntityType } from '../__json__/entity-type';

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
  get entityUuid(): string {
    return this._json.entity_uuid;
  }

  /**
   * Gets the total cost.
   * @returns {number} total
   */
  get totalCost(): number {
    return this._json.total;
  }

  /**
   * Gets the cost of CPU.
   * @returns {number} cpu cost
   */
  get cpuCost(): number {
    return this._json.cpu;
  }

  /**
   * Gets the cost of bandwidth.
   * @returns {number} bandwidth cost
   */
  get bandwidthCost(): number {
    return this._json.bandwidth;
  }

  /**
   * Gets the cost of memory.
   * @returns {number} memory cost
   */
  get memoryCost(): number {
    return this._json.mem;
  }

  /**
   * Gets an estimate of what the cost could be at the end of the billing period.
   * @returns {number} estimated cost
   */
  get estimatedCost(): number {
    return this._json.estimate;
  }

  /**
   * Gets the CPU usage.
   * @returns {number} cpu usage
   */
  get cpuUsage(): number {
    return this._json.cpu_usage;
  }

  /**
   * Gets the CPU burst usage.
   * @returns {number} cpu burst usage
   */
  get cpuBurstUsage(): number {
    return this._json.cpu_burst_usage;
  }

  /**
   * Gets the CPU reserved usage.
   * @returns {number} cpu reserved usage
   */
  get cpuReservedUsage(): number {
    return this._json.cpu_res_usage;
  }

  /**
   * Gets the memory usage.
   * @returns {number} memory usage
   */
  get memoryUsage(): number {
    return this._json.mem_usage;
  }

  /**
   * Gets the reserved memory usage.
   * @returns {number} reserved memory usage
   */
  get memoryReservedUsage(): number {
    return this._json.mem_res_usage;
  }

  /**
   * Gets the burst memory usage.
   * @returns {number} burst memory usage
   */
  get memoryBurstUsage(): number {
    return this._json.mem_burst_usage;
  }

  /**
   * Gets the bandwidth usage.
   * @returns {number} bandwidth usage
   */
  get bandwidthUsage(): number {
    return this._json.bandwidth_usage;
  }

  /**
   * Gets the burst CPU cost.
   * @returns {number} burst cpu cost
   */
  get cpuBurstCost(): number {
    return this._json.cpu_burst;
  }

  /**
   * Gets the burst memory cost.
   * @returns {number} burst memory cost
   */
  get memoryBurstCost(): number {
    return this._json.mem_burst;
  }

  /**
   * Gets the burst bandwidth cost.
   * @returns {number} burst bandwidth cost
   */
  get bandwidthBurstCost(): number {
    return this._json.bandwidth_burst;
  }

  /**
   * Gets the currency code.
   * @returns {CurrencyCode} the currency code
   */
  get currencyCode(): CurrencyCode {
    return this._json.currency_code;
  }

  /**
   * Gets the timestamp of the bill.
   * @returns {Date} the bill timestamp
   */
  get timestamp(): Date {
    return new Date(this._json.time);
  }

  /**
   * Indicates whether this is a test drive.
   * @returns {boolean} value
   */
  get testDrive(): boolean {
    return this._json.test_drive;
  }

  /**
   * Gets the line items.
   * @returns {Array<BillLineItem>} line items
   */
  get lineItems(): Array<BillLineItem> {
    return this._json.line_items.map(json => new BillLineItem(json));
  }

  /**
   * Gets the discount factor.
   * @returns {number} discount
   */
  get discount(): number {
    return this._json.discount;
  }

  /**
   * Gets the disk usage for the billing period.
   * @returns {number} disk usage
   */
  get diskUsage(): number {
    return this._json.disk_usage;
  }

  /**
   * Gets the disk cost for the billing period.
   * @returns {number} disk cost
   */
  get diskCost(): number {
    return this._json.disk;
  }

  /**
   * Gets the disk burst usage for the billing period.
   * @returns {number} disk burst usage
   */
  get diskBurstUsage(): number {
    return this._json.disk_burst_usage;
  }

  /**
   * Gets the disk burst cost for the billing period.
   * @returns {number} disk burst cost
   */
  get diskBurstCost(): number {
    return this._json.disk_burst;
  }

  /**
   * Gets the hard drive storage usage for the billing period.
   * @returns {number} hard drive storage usage
   */
  get hddStorageUsage(): number {
    return this._json.hdd_usage;
  }

  /**
   * Gets the hard drive storage usage for the billing period.
   * @returns {number} hard drive storage usage
   */
  get hddStorageCost(): number {
    return this._json.hdd_cost;
  }

  /**
   * Gets the hard drive storage burst cost for the billing period.
   * @returns {number} hard drive storage burst cost.
   */
  get hddStorageBurstCost(): number {
    return this._json.hdd_burst_cost;
  }

  /**
   * Gets the hard drive storage reserved cost for the billing period.
   * @returns {number} hard drive storage reserved cost.
   */
  get hddStorageReservedCost(): number {
    return this._json.hdd_reserved_cost;
  }

  /**
   * Gets the hard drive storage reserved usage.
   * @returns {number} hard drive storage reserved usage.
   */
  get hddStorageReservedUsage(): number {
    return this._json.hdd_reserved_usage;
  }

  /**
   * Gets the solid state storage reserved usage.
   * @returns {number} solid state storage reserved usage.
   */
  get ssdStorageReservedUsage(): number {
    return this._json.ssd_reserved_usage;
  }

  /**
   * Gets the solid state storage reserved cost.
   * @returns {number} solid state storage reserved cost.
   */
  get ssdStorageReservedCost(): number {
    return this._json.ssd_reserved_cost;
  }

  /**
   * Gets the solid state storage usage.
   * @returns {number} solid state storage usage.
   */
  get ssdStorageUsage(): number {
    return this._json.ssd_usage;
  }

  /**
   * Gets the solid state storage cost.
   * @returns {number} solid state storage cost
   */
  get ssdStorageCost(): number {
    return this._json.ssd_cost;
  }

  /**
   * Gets the solid state storage burst usage.
   * @returns {number} solid state storge burst usage
   */
  get ssdStorageBurstUsage(): number {
    return this._json.ssd_burst_usage;
  }

  /**
   * Gets the solid state storage burst cost.
   * @returns {number} solid state storage burst cost
   */
  get ssdStorageBurstCost(): number {
    return this._json.ssd_burst_cost;
  }

  /**
   * Gets the archive storage usage.
   * @returns {number} archive storage usage
   */
  get archiveStorageUsage(): number {
    return this._json.archive_usage;
  }

  /**
   * Gets the archive storage cost.
   * @returns {number} archive storage cost
   */
  get archiveStorageCost(): number {
    return this._json.archive_cost;
  }

  /**
   * Gets the archive storage burst usage.
   * @returns {number} archive storage burst usage
   */
  get archiveStorageBurstUsage(): number {
    return this._json.archive_burst_usage;
  }

  /**
   * Gets the archive storage burst cost.
   * @returns {number} archive storage burst cost
   */
  get archiveStorageBurstCost(): number {
    return this._json.archive_burst_cost;
  }

  /**
   * Gets the archive storage reserved cost.
   * @returns {number} archive storage reserved cost
   */
  get archiveStorageReservedCost(): number {
    return this._json.archive_reserved_cost;
  }

  /**
   * Gets the archive storage reserved usage.
   * @returns {number} archive storage reserved usage
   */
  get archiveStorageReservedUsage(): number {
    return this._json.archive_reserved_usage;
  }

  /**
   * Gets the zerto archive storage usage.
   * @returns {number} zerto archive storage usage
   */
  get zertoArchiveStorageUsage(): number {
    return this._json.zerto_archive_usage;
  }

  /**
   * Gets the zerto archive storage cost.
   * @returns {number} zerto archive storage cost
   */
  get zertoArchiveStorageCost(): number {
    return this._json.zerto_archive_cost;
  }

  /**
   * Gets the zerto advanced storage cost.
   * @returns {number} zerto advanced storage cost
   */
  get zertoAdvancedStorageCost(): number {
    return this._json.zerto_advanced_cost;
  }

  /**
   * Gets the zerto advanced storage usage.
   * @returns {number} zerto advanced storage usage
   */
  get zertoAdvancedStorageUsage(): number {
    return this._json.zerto_advanced_usage;
  }

  /**
   * Gets the entity type that the bill is associated with.
   * @returns {EntityType} entity type
   */
  get entityType(): EntityType {
    return this._json.entity_type;
  }

  /**
   * Gets the name of the entity that the bill is associated with.
   * @returns {string} entity name
   */
  get entityName(): string {
    return this._json.entity_name;
  }

  /**
   * Gets the bandwidth reserved usage.
   * @returns {number} bandwidth reserved usage
   */
  get bandwidthReservedUsage(): number {
    return this._json.bandwidth_reserved_usage;
  }

  /**
   * Gets the bandwidth reserved cost.
   * @returns {number} bandwidth reserved cost
   */
  get bandwidthReservedCost(): number {
    return this._json.bandwidth_reserved_cost;
  }

  /**
   * Gets the bandwidth burst usage.
   * @returns {number} bandwidth burst usage
   */
  get bandwidthBurstUsage(): number {
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
  get json(): BillJson {
    return Object.assign({}, this._json);
  }

}

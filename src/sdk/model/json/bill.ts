import { EntityType } from './entity-type';

/**
 * Interface for BillJson JSON representation.
 */
export interface BillJson {
  total: number;
  cpu: number;
  bandwidth: number;
  mem: number;
  estimate: number;
  cpu_usage: number;
  cpu_burst_usage: number;
  cpu_res_usage: number;
  mem_usage: number;
  mem_res_usage: number;
  mem_burst_usage: number;
  bandwidth_usage: number;
  cpu_burst: number;
  mem_burst: number;
  bandwidth_burst: number;
  currency_code: CurrencyCode;
  time: number;
  test_drive: boolean;
  line_items: Array<BillLineItemJson>;
  discount: number;
  disk_usage: number;
  disk: number;
  disk_burst_usage: number;
  disk_burst: number;
  hdd_usage: number;
  hdd_cost: number;
  hdd_burst_usage: number;
  hdd_burst_cost: number;
  hdd_reserved_cost: number;
  hdd_reserved_usage: number;
  ssd_usage: number;
  ssd_cost: number;
  ssd_burst_usage: number;
  ssd_burst_cost: number;
  ssd_reserved_cost: number;
  ssd_reserved_usage: number;
  archive_usage: number;
  archive_cost: number;
  archive_burst_usage: number;
  archive_burst_cost: number;
  archive_reserved_cost: number;
  archive_reserved_usage: number;
  zerto_archive_usage: number;
  zerto_archive_cost: number;
  zerto_advanced_usage: number;
  zerto_advanced_cost: number;
  entity_uuid: string;
  entity_type: EntityType;
  entity_name: string;
  bandwidth_reserved_usage: number;
  bandwidth_reserved_cost: number;
  bandwidth_burst_usage: number;
}

/**
 * Interface for BillJson Line Item JSON representation.
 */
export interface BillLineItemJson {
  name: string;
  price: number;
  quantity: number;
  product_id: string;
}

/**
 * Enumeration of supported currency codes.
 */
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'SGD';

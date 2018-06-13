import { ResourceCostAndUsageJson } from './resource-cost-and-usage-json';
import { DiskCostAndUsageJson } from './disk-cost-and-usage-json';
import { EntityType } from '../../__json__/entity-type';

/**
 * Interface for BillJson JSON representation.
 */
export interface BillJson {
  bandwidth: ResourceCostAndUsageJson;
  cpu: ResourceCostAndUsageJson;
  memory: ResourceCostAndUsageJson;
  disk: DiskCostAndUsageJson;
  total_cost: number;
  total_cost_estimate: number;
  year: number;
  month: number;
  entity_uuid: string;
  entity_name: string;
  entity_type: EntityType;
}

/**
 * Interface for BillJson Line Item JSON representation.
 */
export interface BillLineItemJson {
  name: string;
  price: number;
  quantity: number;
  product_id: string;
  entity_type: EntityType;
}

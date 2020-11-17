import { ResourceCostAndUsageJson } from './resource-cost-and-usage-json';
import { DiskCostAndUsageJson } from './disk-cost-and-usage-json';
import { EntityType } from '../../__json__/entity-type';
import { CurrencyCode } from './currency-code-type';
import { BillingModelType } from './billing-model-type';

/**
 * Interface for BillJson JSON representation.
 */
export interface BillJson {
  billing_model_type: BillingModelType | null;
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
  line_items: Array<BillLineItemJson>;
  currency_code: CurrencyCode;
  test_drive: boolean;
}

/**
 * Interface for BillJson Line Item JSON representation.
 */
export interface BillLineItemJson {
  name: string;
  cost_per_unit: number;
  quantity: number;
  product_id: string;
}

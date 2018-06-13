import { CostAndUsageJson } from './cost-and-usage-json';

export interface ResourceCostAndUsageJson {
  total: CostAndUsageJson;
  reserved: CostAndUsageJson;
  burst: CostAndUsageJson;
}

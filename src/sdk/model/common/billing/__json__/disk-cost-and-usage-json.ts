import { ResourceCostAndUsageJson } from './resource-cost-and-usage-json';

export interface DiskCostAndUsageJson {
  total: ResourceCostAndUsageJson;
  hdd: ResourceCostAndUsageJson;
  ssd: ResourceCostAndUsageJson;
  archive: ResourceCostAndUsageJson;
}

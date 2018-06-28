import { VmResourceSummaryJson } from '../../vm/__json__/vm-resource-summary-json';

export interface VmResourceSummaryMapJson {
  summaries: { [key: string]: VmResourceSummaryJson };
}

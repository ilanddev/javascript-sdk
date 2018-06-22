import { VappResourceSummaryJson } from '../../vapp/summary/__json__/vapp-resource-summary-json';

export interface VappResourceSummaryMapJson {
  summaries: { [key: string]: VappResourceSummaryJson };
}

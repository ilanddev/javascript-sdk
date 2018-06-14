import { VmSummaryJson } from '../../../vm/summary/__json__/vm-summary-json';

export interface VmSummaryMapResponseJson {
  summaries: { [key: string]: VmSummaryJson };
}

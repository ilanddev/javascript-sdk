import { BillJson } from './bill';

/**
 * Interface for Billing Summary JSON representation.
 */
export interface BillingSummaryJson {
  previous_month: BillJson;
  current_month: BillJson;
  previous_hour: BillJson;
  current_hour: BillJson;
  test_drive: boolean;
}

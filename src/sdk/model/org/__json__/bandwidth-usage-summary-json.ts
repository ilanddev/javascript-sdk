import { BillingModelType } from '../../common/billing/__json__/billing-model-type';

export interface BandwidthUsageSummaryJson {
  reserved_amount?: number;
  total_usage: number;
  burst_usage: number;
  month: number;
  year: number;
  billing_model_type: BillingModelType;
}

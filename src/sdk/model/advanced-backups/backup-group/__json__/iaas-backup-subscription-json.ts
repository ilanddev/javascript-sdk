import { CurrencyCode } from '../../../common/billing/__json__/currency-code-type';

/**
 * IaaS backup subscription JSON.
 */
export interface IaasBackupSubscriptionJson {
  company_id: string;
  location_id: string;
  org_uuid: string;
  vdc_uuid: string;
  activation_time: number;
  deactivation_time?: number;
  reserved_amount_gb: number;
  reserved_cost: number;
  burst_cost_per_gb_hour: number;
  currency_code: CurrencyCode;
}

import { CurrencyCode } from '../../../common/billing/__json__/currency-code-type';

/**
 * IaaS backup bill JSON.
 */
export interface IaasBackupBillJson {
  company_id: string;
  location_id: string;
  org_uuid: string;
  vdc_uuid: string;
  year: number;
  month: number;
  burst_usage_byte_hours: number;
  burst_cost: number;
  reserved_cost: number;
  currency_code: CurrencyCode;
  local_usage_byte_hours: number;
  remote_usage_byte_hours: number;
  total_usage_byte_hours: number;
}

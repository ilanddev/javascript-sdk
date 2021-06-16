import { CurrencyCode } from '../../common/billing/__json__/currency-code-type';

/**
 * O365 Bill Response JSON properties
 */
export interface O365BillJson {
  burst_count_licenses: number;
  cost_per_license: number;
  currency_code: CurrencyCodeResponse;
  full_month_contract_cost: number;
  month: number;
  number_of_licenses: number;
  total: number;
  total_cost_for_used_licenses: number;
  year: number;
}

/**
 * Currency code response
 */
export interface CurrencyCodeResponse {
  currency_code: CurrencyCode;
}

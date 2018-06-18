import { CurrencyCode } from '../../common/billing/__json__/currency-code-type';

export interface CloudTenantBillJson {
  total: number;
  year: number;
  month: number;
  currency_code: CurrencyCode;
  storage_quota_in_gb: number;
  storage_price_per_gb: number;
  full_month_contract_cost: number;
}

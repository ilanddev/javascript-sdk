import { CurrencyCode } from '../../common/billing/__json__/currency-code-type';

export interface CloudTenantBillJson {
  total: number;
  year: number;
  month: number;
  currency_code: CurrencyCode;
  storage_quota_in_gb: number;
  storage_price_per_gb: number;
  full_month_contract_cost: number;
  has_insider_protection: boolean;
  insider_protection_price_per_gb: number;
  insider_protection_total: number;
  wan_accelerator_appliance_total: number;
  dedicated_veeam_gateway_total: number;
  rental_licenses_subscriptions_total: number;
}

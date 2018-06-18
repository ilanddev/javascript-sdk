import { CloudTenantBillJson } from './cloud-tenant-bill-json';

export interface CloudTenantBillHistoryJson {
  bills: { [key: string]: Array<CloudTenantBillJson> };
}

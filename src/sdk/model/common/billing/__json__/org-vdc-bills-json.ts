import { BillJson } from './bill-json';

/**
 * Interface for Org vDC Bills JSON representation.
 */
export interface OrgVdcBillsJson {
  org_uuid: string;
  month: number;
  year: number;
  vdc_bills: Array<BillJson>;
}

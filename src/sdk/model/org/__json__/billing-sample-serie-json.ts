import { BillingSampleJson } from './billing-sample-json';

export interface BillingSampleSerieJson {
  entity_uuid: string;
  entity_name: string;
  interval: number;
  summary: string;
  samples: Array<BillingSampleJson>;
  currency_code: string;
}

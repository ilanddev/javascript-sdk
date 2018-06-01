import { SerieType } from './serie-type';

export interface FirewallOverTimeJson {
  org_uuid: string;
  type: SerieType;
  samples: Array<FirewallOverTimeSampleJson>;
}

export interface FirewallOverTimeSampleJson {
  time: number;
  total_drops: number;
  total_allows: number;
  total_log_only: number;
}

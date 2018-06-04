import { SerieType } from './serie-type';

export interface ComplianceOverTimeJson {
  org_uuid: string;
  type: SerieType;
  samples: Array<ComplianceOverTimeSampleJson>;
}

export interface ComplianceOverTimeSampleJson {
  time: number;
  total_risks: number;
}

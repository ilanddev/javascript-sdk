import { SerieType } from './serie-type';

export interface LogInspectionOverTimeJson {
  org_uuid: string;
  type: SerieType;
  samples: Array<LogInspectionOverTimeSampleJson>;
}

export interface LogInspectionOverTimeSampleJson {
  time: number;
  num_info: number;
  num_low: number;
  num_medium: number;
  num_high: number;
  num_critical: number;
}

export interface NetworkPerfSampleSerieJson {
  summary: string | null;
  interval: number;
  group: PerfGroupType | null;
  name: string | null;
  type: PerfStatsType | null;
  unit: string | null;
  samples: Array<NetworkPerfSampleJson> | null;
}

export interface NetworkPerfSampleJson {
  time: number | null;
  value: number | null;
}

export type PerfStatsType = 'absolute' | 'delta' | 'rate';

export type PerfGroupType = 'cpu' | 'disk' | 'mem' | 'net';

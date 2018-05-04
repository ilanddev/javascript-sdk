/**
 * Perf Sample Serie Json properties
 */
export interface PerfSampleSerieJson {
  uuid: string;
  summary: string;
  interval: number;
  group: string;
  name: string;
  type: string;
  unit: string;
  samples: Array<PerfSampleJson>;
}

/**
 * Perf Sample Json properties
 */
export interface PerfSampleJson {
  timestamp: number;
  value: number;
}

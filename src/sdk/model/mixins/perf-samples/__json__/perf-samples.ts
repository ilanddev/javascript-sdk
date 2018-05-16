/**
 * API PerfSample JSON Representation.
 */
export interface PerfSampleJson {
  timestamp: number;
  value: number;
}

/**
 * API PerfSampleSerie JSON Representation.
 */
export interface PerfSamplesSeriesJson {
  uuid: string;
  summary: string;
  group: string;
  name: string;
  type: string;
  interval: number;
  unit: string;
  samples: Array<PerfSampleJson>;
}

/**
 * API PerfCounter JSON Representation.
 */
export interface PerfCounterJson {
  group: string;
  name: string;
  type: string;
}

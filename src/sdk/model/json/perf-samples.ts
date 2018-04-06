/**
 * API PerfSampleSerie JSON Representation.
 */
export interface PerfSampleSerieJson {
  uuid: string;
  summary: string;
  group: string;
  name: string;
  type: string;
  interval: number;
  unit: string;
  samples: Array<PerfSampleJson>;
  perfSamples: Array<PerfSampleJson>;
}

/**
 * API PerfSample JSON Representation.
 */
export interface PerfSampleJson {
  time: Date;
  value: number;
}

/**
 * API PerfCounter JSON Representation.
 */
export interface PerfCounterJson {
  group: string;
  name: string;
  type: string;
}

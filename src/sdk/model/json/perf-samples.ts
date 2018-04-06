/**
 * API PerfSampleSerie JSON Representation.
 */
export interface PerfSampleSerie {
    uuid: string;
    summary: string;
    group: string;
    name: string;
    type: string;
    interval: number;
    unit: string;
    samples: Array<PerfSample>;
    perfSamples: Array<PerfSample>;
}

/**
 * API PerfSample JSON Representation.
 */
export interface PerfSample {
    time: Date;
    value: number;
}

/**
 * API PerfCounter JSON Representation.
 */
export interface PerfCounter {
    group: string,
    name: string,
    type: string
}

/**
 * Role Creation Request JSON properties.
 */
import {PerfCounterJson} from "./perf-samples";

export interface PerfSamplesRequestJson {
    counter: PerfCounterJson
    start: number;
    end: number;
    interval: number;
    limit: number;
}

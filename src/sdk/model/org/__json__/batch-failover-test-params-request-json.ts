import { FailoverTestParamsRequestJson } from './failover-test-params-request-json';

export interface BatchFailoverTestParamsRequestJson {
  batch_params: { [key: string]: FailoverTestParamsRequestJson };
}

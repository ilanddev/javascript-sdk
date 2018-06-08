import { FailoverParamsRequestJson } from './failover-params-request-json';

export interface BatchFailoverParamsRequestJson {
  batch_params: { [key: string]: FailoverParamsRequestJson };
}

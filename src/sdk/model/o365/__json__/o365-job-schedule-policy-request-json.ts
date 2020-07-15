import {
    O365JobSchedulePolicyDailyType,
    O365JobSchedulePolicyPeriodicallyEvery,
    O365JobSchedulePolicyType
} from './o365-job-json';

/**
 * O365 Job Schedule Policy Request JSON properties
 */
export interface O365JobSchedulePolicyRequestJson {
  policy_type: O365JobSchedulePolicyType;
  daily_type?: O365JobSchedulePolicyDailyType;
  periodically_every?: O365JobSchedulePolicyPeriodicallyEvery;
  daily_time?: string;
  is_retry_enabled: boolean;
  retry_number: number;
  retry_wait_interval: number;
}

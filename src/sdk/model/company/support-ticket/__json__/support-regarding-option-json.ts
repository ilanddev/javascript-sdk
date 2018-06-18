import { SupportServiceOptionJson } from './support-service-option-json';

/**
 * Support Regarding Option JSON interface.
 */
export interface SupportRegardingOptionJson {
  id: number;
  name: string;
  service_options: Array<SupportServiceOptionJson>;
}

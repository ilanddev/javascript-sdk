import { SupportServiceOption } from '../support-service-option';

/**
 * Support Regarding Option JSON interface.
 */
export interface SupportRegardingOptionJson {
  id: number;
  name: string;
  service_options: Array<SupportServiceOption>;
}

import { SupportCategory } from '../support-category';

/**
 * Support Service Option JSON interface.
 */
export interface SupportServiceOptionJson {
  id: number;
  name: string;
  regarding_option_id: number;
  support_categories: Array<SupportCategory>;
}

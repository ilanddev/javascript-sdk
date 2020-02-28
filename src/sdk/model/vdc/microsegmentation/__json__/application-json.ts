import { ElementJson } from './element-json';

/**
 * Application JSON
 */
export interface ApplicationJson {
  object_id: string;
  name: string;
  description: string;
  scope: string;
  inheritance_allowed: boolean;
  element: ElementJson;
}

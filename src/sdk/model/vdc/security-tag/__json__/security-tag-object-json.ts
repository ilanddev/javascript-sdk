import { SecurityTagObjectPropertyJson } from './security-tag-object-property-json';

/**
 * Security Tag Object JSON
 */
export interface SecurityTagObjectJson {
  type: string;
  name: string;
  properties: Array<SecurityTagObjectPropertyJson>;
}

import { RoutingAuthenticationType } from './routing-authentication-type';

/**
 * Authentication JSON
 */
export interface AuthenticationJson {
  type: RoutingAuthenticationType;
  value: string;
}

/**
 * Firewall action Enum and Type
 * This file export both and Enum and a Type
 *
 * It can be used in different ways:
 * - FirewallAction['DENY']
 * - FirewallAction.DENY
 *
 * Always use type for function parameters !
 *
 * Example:
 * ------------------------------------------------------
 * function print(firewallAction: FirewallActionType) {
 *   const action = FirewallAction[firewallAction];
 *   if (action === FirewallAction.DENY) {
 *      ...
 *   }
 * }
 *
 */

/**
 * Firewall Action Enum
 */
export enum FirewallAction {
  ACCEPT,
  DENY
}

/**
 * Firewall Action Type
 * This is equivalent to: FirewallActionType = 'ACCEPT' | 'DENY';
 */
export type EdgeGatewayFirewallActionType = keyof typeof FirewallAction;

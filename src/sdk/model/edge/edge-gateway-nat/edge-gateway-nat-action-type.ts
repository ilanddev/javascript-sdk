/**
 * NAT action Enum and Type
 * This file export both and Enum and a Type
 *
 * It can be used in different ways:
 * - EdgeGatewayNatAction['SNAT']
 * - EdgeGatewayNatAction.SNAT
 *
 * Example:
 * ------------------------------------------------------
 * function print(natAction: EdgeGatewayNatActionType) {
 *   const action = EdgeGatewayNatAction[natAction];
 *   if (action === EdgeGatewayNatAction.DENY) {
 *      ...
 *   }
 * }
 *
 */

/**
 * Nat Action Enum
 */
export enum EdgeGatewayNatAction {
  SNAT = 'SNAT',
  DNAT = 'DNAT'
}

/**
 * Nat Action Type
 * This is equivalent to: EdgeGatewayNatActionType = 'SNAT' | 'DNAT';
 */
export type EdgeGatewayNatActionType = keyof typeof EdgeGatewayNatAction;

export enum DistributedFirewallDirectionTypeEnum {
  IN = 'IN',
  OUT = 'OUT',
  INOUT = 'INOUT'
}

export type DistributedFirewallDirectionType = keyof typeof DistributedFirewallDirectionTypeEnum;

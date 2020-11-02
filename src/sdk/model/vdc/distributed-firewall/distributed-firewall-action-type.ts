export enum DistributedFirewallActionTypeEnum {
  ALLOW = 'ALLOW',
  DENY = 'DENY'
}

export type DistributedFirewallActionType = keyof typeof DistributedFirewallActionTypeEnum;

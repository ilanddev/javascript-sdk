export enum DistributedFirewallProtocolNameTypeEnum {
  TCP = 'TCP',
  UDP = 'UDP',
  ICMP = 'ICMP'
}

export type DistributedFirewallProtocolNameType = keyof typeof DistributedFirewallProtocolNameTypeEnum;

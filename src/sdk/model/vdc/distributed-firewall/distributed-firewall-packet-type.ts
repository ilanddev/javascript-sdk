export enum DistributedFirewallPacketTypeEnum {
  ANY = 'ANY',
  IPV_4 = 'IPV_4',
  IPV_6 = 'IPV_6'
}

export type DistributedFirewallPacketType = keyof typeof DistributedFirewallPacketTypeEnum;

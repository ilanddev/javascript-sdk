export enum EdgeGatewaySslVpnAuthServerTypeEnum {
  LOCAL = 'LOCAL',
  LDAP = 'LDAP',
  AD = 'AD',
  RADIUS = 'RADIUS',
  ACE = 'ACE'
}

export type EdgeGatewaySslVpnAuthServerType = keyof typeof EdgeGatewaySslVpnAuthServerTypeEnum;

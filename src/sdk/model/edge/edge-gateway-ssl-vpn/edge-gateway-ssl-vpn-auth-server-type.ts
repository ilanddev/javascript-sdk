export enum EdgeGatewaySslVpnAuthServerTypeEnum {
  LOCAL = 'LOCAL',
  LDAP = 'LDAP',
  AD = 'AD',
  RADIUS = 'RADIUS',
  RSA = 'RSA'
}

export type EdgeGatewaySslVpnAuthServerType = keyof typeof EdgeGatewaySslVpnAuthServerTypeEnum;

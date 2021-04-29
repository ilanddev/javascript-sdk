export enum UserLoginTypeEnum {
  LOCAL = 'LOCAL',
  SSO = 'SSO'
}

export type UserLoginType = keyof typeof UserLoginTypeEnum;

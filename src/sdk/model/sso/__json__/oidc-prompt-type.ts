export enum OIDCPromptEnum {
  UNSPECIFIED = 'UNSPECIFIED',
  NONE = 'NONE',
  CONSENT = 'CONSENT',
  LOGIN = 'LOGIN',
  SELECT_ACCOUNT = 'SELECT_ACCOUNT'
}

export type OIDCPromptType = keyof typeof OIDCPromptEnum;

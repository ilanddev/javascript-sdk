export enum OIDCPromptEnum {
  UNSPECIFIED = 'unspecified',
  NONE = 'none',
  CONSENT = 'consent',
  LOGIN = 'login',
  SELECT_ACCOUNT = 'select_account'
}

export type OIDCPromptType = 'unspecified' | 'none' | 'consent' | 'login' | 'select_account';

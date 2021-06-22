export enum UserInvitationStatusEnum {
  SENT = 'SENT',
  NOT_SENT = 'NOT_SENT',
  ACTIVE = 'ACTIVE'
}

export type UserInvitationStatus = keyof typeof UserInvitationStatusEnum;

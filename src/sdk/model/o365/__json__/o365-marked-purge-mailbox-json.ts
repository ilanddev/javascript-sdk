import { O365PurgeMailboxJson } from './o365-purge-mailbox-json';

/**
 * O365 marked purge mailbox JSON properties
 */
export interface O365MarkedPurgeMailboxJson extends O365PurgeMailboxJson {
  organization_uuid: string;
  active: boolean;
  purge_date: number;
  purge_status: string;
  initiated_date: number;
  error_msg?: string;
  requested_by: string;
}

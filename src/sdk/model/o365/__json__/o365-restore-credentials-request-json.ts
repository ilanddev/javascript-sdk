/**
 * Interface for O365 Restore Credentials Request JSON properties
 */
export interface O365RestoreCredentialsRequestJson {
  user: string;
  password: string;
  mailbox_to_restore_to?: string;
  changed_items?: boolean;
  deleted_items?: boolean;
  mark_restored_as_unread?: boolean;
  exclude_drafts?: boolean;
  exclude_deleted_items?: boolean;
  exclude_in_place_hold_items?: boolean;
  exclude_litigation_hold_items?: boolean;
  folder?: string | null;
  cas_server?: string | null;
}

/**
 * Nessus History API JSON interface.
 */
export interface NessusHistoryJson {
  history_id: number;
  uuid: string;
  owner_id: number;
  status: string;
  creation_date: number;
  last_modification_date: number;
}

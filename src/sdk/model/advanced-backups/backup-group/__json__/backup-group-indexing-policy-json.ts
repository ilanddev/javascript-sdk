/**
 * Backup Group Indexing Policy JSON.
 */
export interface BackupGroupIndexingPolicyJson {
  allow_prefixes: Array<string>;
  deny_prefixes: Array<string>;
  disable_indexing: boolean;
}

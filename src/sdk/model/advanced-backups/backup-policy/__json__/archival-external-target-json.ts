import { VaultType } from './vault-type';

/**
 * Archival External Target JSON.
 */
export interface ArchivalExternalTargetJson {
  vault_id: number;
  vault_name: string;
  vault_type: VaultType;
}

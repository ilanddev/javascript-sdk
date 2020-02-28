/**
 * Security Tag Create Request JSON
 */
export interface SecurityTagCreateRequestJson {
  name: string;
  description: string;
  assigned_vm_ids: Array<string>;
}

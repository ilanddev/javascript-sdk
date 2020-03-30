/**
 * Security Tag Update Request JSON
 */
export interface SecurityTagUpdateRequestJson {
  update_vms: boolean;
  object_id: string;
  name: string;
  description: string;
  assigned_vm_ids: Array<string>;
}

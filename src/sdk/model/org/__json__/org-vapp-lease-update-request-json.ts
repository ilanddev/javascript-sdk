/**
 * API JSON spec for org vapp  update request.
 */
export interface OrgVappLeaseUpdateRequestJson {
  vapp_delete_on_storage_expire: boolean;
  vapp_max_runtime_lease: number;
  vapp_max_storage_lease: number;
}

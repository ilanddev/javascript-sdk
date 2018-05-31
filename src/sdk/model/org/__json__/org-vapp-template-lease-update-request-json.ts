/**
 * API JSON spec for org vapp template update request.
 */
export interface OrgVappTemplateLeaseUpdateRequestJson {
  vapp_template_delete_on_storage_expire: boolean;
  vapp_template_max_storage_lease: number;
}

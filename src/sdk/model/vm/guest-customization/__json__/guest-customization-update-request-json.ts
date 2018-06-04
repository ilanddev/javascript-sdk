/**
 * VM Guest customization update request JSON
 */
export interface GuestCustomizationUpdateRequestJson {
  enabled: boolean;
  change_sid: boolean;
  virtual_machine_id: string;
  join_domain: boolean;
  use_org_settings: boolean;
  domain_name: string;
  domain_user_name: string;
  domain_user_password: string;
  machine_object_ou: string;
  admin_password_enabled: boolean;
  admin_password_auto: boolean;
  admin_password: string;
  admin_auto_logon_enabled: boolean;
  admin_auto_logon_count: number;
  reset_password_required: boolean;
  computer_name: string;
  required: boolean;
}

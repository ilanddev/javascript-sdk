import { NetworkConnectionType } from '../network-connection-type';

export interface VdiAutomationGroupJson {
  uuid: string;
  name: string;
  description: string;
  edge_uuid: string;
  public_ip: string;
  vapp_template_uuid: string;
  deployment_vdc_uuid: string;
  org_vdc_network_uuid: string;
  domain_to_join: string;
  default_teams: Array<string>;
  default_users: Array<string>;
  network_connection_type: NetworkConnectionType;
  join_domain_enabled: boolean;
  domain_user_name: string;
  domain_user_password: string;
  guest_password_reset_required: boolean;
}

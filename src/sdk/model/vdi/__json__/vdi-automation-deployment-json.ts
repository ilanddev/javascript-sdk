import { NetworkConnectionType } from '../network-connection-type';
import { VdiDeploymentState } from '../vdi-deployment-state';

export interface VdiAutomationDeploymentJson {
  uuid: string;
  org_uuid: string;
  automation_group_uuid: string;
  state: VdiDeploymentState;
  deployment_user: DeploymentUserJson;
  configuration: AutomationGroupConfigJson;
  deployment_details: DeploymentDetailsJson;
}

export interface DeploymentDetailsJson {
  internal_ip: string;
  public_rdp_port: string;
  vm_uuid: string;
  vapp_uuid: string;
  guest_admin_password: string;
  computer_name: string;
}

export interface DeploymentUserJson {
  user_uuid: string;
  user_email: string;
  user_full_name: string;
}

export interface AutomationGroupConfigJson {
  vm_template_uuid: string;
  deployment_vdc_uuid: string;
  org_vdc_network_uuid: string;
  domain_to_join: string;
  edge_uuid: string;
  public_rdp_ip: string;
  network_connection_type: NetworkConnectionType;
  join_domain_enabled: boolean;
  guest_password_reset_required: boolean;
}

export interface VdiAutomationGroupDeploymentSummaryJson {
  automation_group_uuid: string;
  automation_group_name: string;
  number_of_pending_deploys: number;
  number_of_ready_deployments: number;
  number_of_pending_undeploys: number;
  number_of_failed_deploys: number;
}

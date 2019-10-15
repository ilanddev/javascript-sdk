import { VdiAutomationGroupDeploymentSummaryJson } from './vdi-automation-group-deployment-summary-json';

export interface VdiOrgDeploymentSummaryJson {
  number_of_pending_deploys_in_org: number;
  number_of_ready_deployments_in_org: number;
  number_of_pending_undeploys_in_org: number;
  number_of_failed_deploys_in_org: number;
  data: Array<VdiAutomationGroupDeploymentSummaryJson>;
}

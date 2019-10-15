import { VdiOrgDeploymentSummaryJson } from './__json__/vdi-org-deployment-summary-json';
import { VdiAutomationGroupDeploymentSummary } from './vdi-automation-group-deployment-summary';

/**
 * VDI Org Deployment Summary.
 */
/* istanbul ignore next: autogenerated */
export class VdiOrgDeploymentSummary {

  constructor(private _json: VdiOrgDeploymentSummaryJson) {
  }

  /**
   * Get number of pending deploys in org.
   * @returns {number}
   */
  get numberOfPendingDeploysInOrg(): number {
    return this._json.number_of_pending_deploys_in_org;
  }

  /**
   * Get number of ready deployments in org.
   * @returns {number}
   */
  get numberOfReadyDeploymentsInOrg(): number {
    return this._json.number_of_ready_deployments_in_org;
  }

  /**
   * Get number of pending undeploys in org.
   * @returns {number}
   */
  get numberOfPendingUndeploysInOrg(): number {
    return this._json.number_of_pending_undeploys_in_org;
  }

  /**
   * Get number of failed deploys in org.
   * @returns {number}
   */
  get numberOfFailedDeploysInOrg(): number {
    return this._json.number_of_failed_deploys_in_org;
  }

  /**
   * Get data.
   * @returns {Array<VdiAutomationGroupDeploymentSummaryJson>}
   */
  get data(): Array<VdiAutomationGroupDeploymentSummary> {
    return this._json.data.map(it => new VdiAutomationGroupDeploymentSummary(it));
  }

  /**
   * Get the json representation of this class.
   * @returns {VdiOrgDeploymentSummaryJson}
   */
  get json(): VdiOrgDeploymentSummaryJson {
    return Object.assign({}, this._json);
  }

  /**
   * Get the string representation of this class.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }
}

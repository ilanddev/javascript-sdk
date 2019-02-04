import { VCCFailoverPlanVmJson } from './failover-plan-vm-json';
import { EntityJson } from '../../common/__json__/entity-json';

/**
 * Interface for VCC Failover Plan properties.
 */
export interface VCCFailoverPlanJson extends EntityJson {
  org_uuid: string;
  uid: string;
  description: string;
  last_test: number;
  vcc_tenant_uid: string;
  vcc_tenant_name: string;
  vms: Array<VCCFailoverPlanVmJson>;
  status: VccFailoverPlanStatus;
}

export type VccFailoverPlanStatus = 'UNKNOWN' |
    'FAILING_OVER' |
    'READY';

import { PublicAssignmentType } from './public-ip-assignment-type';

/**
 * Public IP Assignment JSON interface.
 */
export interface PublicIpAssignmentJson {
  type: PublicAssignmentType;
  ip: string;
  entity_uuid: string;
  entity_name: string;
  external_network_uuid: string;
  external_network_name: string;
}

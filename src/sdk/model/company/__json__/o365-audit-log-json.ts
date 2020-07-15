/**
 * O365 Audit Log JSON properties
 */
export interface O365AuditLogJson {
  username: string;
  location_id: string;
  o365_org_uuid: string;
  event_type: string;
  console_entity: string;
  entity_name: string;
  time: number;
  ip_address: string;
}

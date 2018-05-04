/**
 * Enumeration of possible Vpg Status types.
 */
export type VpgStatus = 'INITIALIZING' |
  'MEETING_SLA' |
  'NOT_MEETING_SLA' |
  'HISTORY_NOT_MEETING_SLA' |
  'RPO_NOT_MEETING_SLA' |
  'FAILING_OVER' |
  'MOVING' |
  'DELETING' |
  'RECOVERED';

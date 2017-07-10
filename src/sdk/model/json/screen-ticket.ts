/**
 * Interface for screen ticket JSON representation.
 */
export interface ScreenTicketJson {
  vm_id: string;
  ticket: string;
  host: string;
  ssl_thumbprint: string;
}

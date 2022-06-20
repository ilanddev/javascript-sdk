/**
 * Interface for O365 Teams send to email Request JSON properties
 */
export interface O365TeamsSendToEmailRequestJson {
  from: string;
  to: string;
  subject: string;
  text: string;
  item_ids?: Array<string>;
}

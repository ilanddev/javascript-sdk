/**
 * Interface for O365 Device code JSON.
 */
export interface O365DeviceCodeJson {
  user_code: string;
  message: string;
  expires_in: number;
  verification_url: string;
}

import { EdgeGatewaySSHSettingsJson } from './edge-gateway-ssh-settings-json';

export interface EdgeGatewaySSHSettingsUpdateRequestJson extends EdgeGatewaySSHSettingsJson {
  password: string;
}

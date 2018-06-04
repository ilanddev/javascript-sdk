import { GuestCustomizationJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockVmGuestCustomizationJson: GuestCustomizationJson = {
  enabled: true,
  change_sid: true,
  virtual_machine_id: 'fake-vm-id',
  join_domain: true,
  use_org_settings: true,
  domain_name: 'fake-domain-name',
  domain_user_name: 'fake-domain-user-name',
  domain_user_password: 'fake-domain-user-pwd',
  machine_object_ou: 'fake-machine-obj',
  admin_password_enabled: true,
  admin_password_auto: true,
  admin_password: 'fake-admin-pwd',
  admin_auto_logon_enabled: true,
  admin_auto_logon_count: 0,
  reset_password_required: true,
  computer_name: 'fake-computer-name',
  required: true
};

export const MockVmGuestCustomizationResponse: Promise<AxiosResponse> =
  new Promise<AxiosResponse>(function(resolve) {
    resolve({
      data: MockVmGuestCustomizationJson,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
  });

import { SecondaryAddressesJson } from './vnic-secondary-addresses-json';

export interface AddressGroupJson {
  primary_address: string;
  secondary_addresses: SecondaryAddressesJson;
  subnet_mask: string;
  subnet_prefix_length: number;
}

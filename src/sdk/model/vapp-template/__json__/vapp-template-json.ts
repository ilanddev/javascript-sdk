import { EntityJson } from '../../common/__json__/entity-json';
import { VappTemplateVmJson } from './vapp-template-vm-json';

/**
 * Interface for VappTemplate JSON representation.
 */
export interface VappTemplateJson extends EntityJson {
  description: string;
  vcloud_href: string;
  status: number;
  size: number;
  customizable: boolean;
  customization_required: boolean;
  gold_master: boolean;
  storage_profile_uuid: string;
  is_public: boolean;
  vdc_uuid: string;
  location_id: string;
  org_uuid: string;
  catalog_uuid: string;
  created_date: number;
  is_expired: boolean;
  vm_templates: Array<VappTemplateVmJson>;
}

import { MediaJson, VappTemplateJson } from './';

export type catalogItemDownloadType = 'vapp_template' | 'media';

export interface ItemDownloadJson {
  'catalog_uuid': string;
  'time': number;
  'item_uuid': string;
  'item_type': catalogItemDownloadType;
  'user': string;
  'media': MediaJson | null;
  'template': VappTemplateJson | null;
}

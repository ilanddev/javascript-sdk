import { catalogItemDownloadType } from './item-downloads-type';
import { MediaJson } from '../../media/__json__/media-json';
import { VappTemplateJson } from '../../vapp-template/__json__/vapp-template-json';

export interface ItemDownloadJson {
  'catalog_uuid': string;
  'time': number;
  'item_uuid': string;
  'item_type': catalogItemDownloadType;
  'user': string;
  'media': MediaJson | null;
  'template': VappTemplateJson | null;
}

import { MetadataType } from './metadata-type';
import { MetadataAccessMode } from './metadata-access-mode-type';
import { MetadataTypeKey } from './metadata-type-key-type';

/**
 * JSON representation of metadata from the API.
 */
export interface MetadataJson<T extends MetadataType> {
  key: string;
  access: MetadataAccessMode;
  type: MetadataTypeKey;
  value: T;
}

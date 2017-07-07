/**
 * JSON representation of metadata from the API.
 */
export interface MetadataJson<T extends MetadataType> {
  key: string;
  access: MetadataAccessMode;
  type: MetadataTypeKey;
  value: T;
}

/**
 * Enumeration of possible metadata type keys.
 */
export type MetadataTypeKey = 'string' | 'number' | 'datetime' | 'boolean';

/**
 * Enumeration of possible metadata types.
 */
export type MetadataType = string | number | boolean | Date;

/**
 * Enumeration of possible metadata access modes.
 */
export type MetadataAccessMode = 'READ_WRITE' | 'READONLY' | 'PRIVATE';

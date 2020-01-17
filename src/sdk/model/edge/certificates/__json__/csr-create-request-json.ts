import { AttributeJson } from './attribute-json';

export interface CSRCreateRequestJson {
  description: string;
  is_temporal: boolean;
  subject: Array<AttributeJson>;
  algorithm: string;
  key_size: number;
}

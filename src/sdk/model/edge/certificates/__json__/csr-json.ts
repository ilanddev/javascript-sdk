import { AttributeJson } from './attribute-json';

export interface CSRJson {
  object_id: string;
  description: string;
  scope: string;
  is_temporal: boolean;
  subject: Array<AttributeJson>;
  algorithm: string;
  key_size: number;
  pem_encoding: string;
}

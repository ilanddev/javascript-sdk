/**
 * Initiate OVF Upload Request JSON.
 */
export interface InitiateOVFUploadRequestJson {
  name: string;
  description?: string;
  descriptor: string;
  upload_type: TemplateUploadType;
}

export type TemplateUploadType = 'OVF' | 'OVA';

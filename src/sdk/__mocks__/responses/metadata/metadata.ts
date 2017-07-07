import { MetadataJson, MetadataType } from '../../../model/json/metadata';
import { AxiosResponse } from 'axios';

/**
 * Mock string metadata.
 */
export const MockStringMetadataJson: MetadataJson<string> = {
  key: 'string-metadata',
  type: 'string',
  access: 'PRIVATE',
  value: 'string value'
};

/**
 * Mock number metadata.
 */
export const MockNumberMetadataJson: MetadataJson<number> = {
  key: 'number-metadata',
  type: 'number',
  access: 'READONLY',
  value: 1000
};

/**
 * Mock boolean metadata.
 */
export const MockBooleanMetadataJson: MetadataJson<boolean> = {
  key: 'boolean-metadata',
  type: 'boolean',
  access: 'READONLY',
  value: false
};

/**
 * Mock datetime metadata.
 */
export const MockDatetimeMetadataJson: MetadataJson<Date> = {
  key: 'datetime-metadata',
  type: 'datetime',
  access: 'READ_WRITE',
  value: new Date()
};

/**
 * Mock metadata array.
 */
export const MockMetadataJson: Array<MetadataJson<MetadataType>> = [MockStringMetadataJson, MockNumberMetadataJson,
  MockBooleanMetadataJson, MockDatetimeMetadataJson];

/**
 * Mock HTTP response of metadata for an entity.
 */
export const MockMetadataResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockMetadataJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

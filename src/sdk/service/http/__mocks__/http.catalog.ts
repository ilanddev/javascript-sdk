import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { MockNotFoundResponse } from '../../../config/__mocks__/errors';
import { MockFakeMetadataResponse, MockMetadataResponse } from '../../../model/common/metadata/__mocks__/metadata';
import {
  CatalogItemDownloadsTemplateMockResponse,
  CatalogMediasMockResponse,
  CatalogVappTemplateMockResponse,
  MockCatalogResponse,
  MockPublicCatalogResponse
} from '../../../model/catalog/__mocks__/catalog';

export async function MockCatalogGet(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    case /\/catalogs\/dev-vcd01.iland.dev:urn:vcloud:catalog:0c73d242-101d-43b3-a856-7eb4b4688534$/.test(url):
      // get a public catalog
      return MockPublicCatalogResponse;
    case /\/catalogs\/[^\/]+?$/.test(url):
      // get a catalog
      return MockCatalogResponse;
    case /\/catalogs\/[^\/]+\/item-downloads$/.test(url):
      // get catalog item downloads
      return CatalogItemDownloadsTemplateMockResponse;
    case /\/catalogs\/[^\/]+\/media$/.test(url):
      // get catalog medias
      return CatalogMediasMockResponse;
    case /\/catalogs\/[^\/]+\/vapp-templates$/.test(url):
      // get catalog metadata
      return CatalogVappTemplateMockResponse;
    case /\/catalogs\/dev-vcd01.iland.dev:urn:vcloud:catalog:d576ce89-0599-42f5-812c-592e0e98964f\/metadata$/
        .test(url):
      // get fake metadata
      return MockFakeMetadataResponse;
    case /\/catalogs\/[^\/]+\/metadata$/.test(url):
      // get catalog metadata
      return MockMetadataResponse;
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCatalogPost(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCatalogPut(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

export async function MockCatalogDelete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  switch (true) {
    default:
      return MockNotFoundResponse;
  }
}

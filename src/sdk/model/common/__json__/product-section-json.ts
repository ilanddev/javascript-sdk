/**
 * Product Section JSON properties for a Vm/Vapp
 */
export interface ProductSectionJson {
  product_class: string;
  product_instance: string;
  product: string;
  product_url: string;
  full_version: string;
  vendor: string;
  version: string;
  properties: { [ key: string]: Array<ProductSectionPropertyJson> };
  info: string;
  vendor_url: string;
}

/**
 * Product Section Property JSON
 * Properties specify application-level customization parameters and are particularly relevant to appliances that
 * need to be customized during deployment with specific settings such as network identity,
 * the IP addresses of DNS servers, gateways, and others. The keys in this map represent property category labels.
 * Properties that do not explicitly belong to a category are associated with a "DEFAULT" key.
 */
export interface ProductSectionPropertyJson {
  password: boolean;
  user_configurable: boolean;
  description: string;
  label: string;
  type: ProductSectionPropertyTypeEnum;
  category: string;
  value: string;
  key: string;
  qualifiers: Array<any>; // Qualifiers that restrict the set of valid values for the property.
}

/**
 * Product Section Property Type enum
 * The property variable type
 */
export enum ProductSectionPropertyTypeEnum {
    UINT8 = 'UINT8',
    SINT8 = 'SINT8',
    UINT16 = 'UINT16',
    SINT16 = 'SINT16',
    UINT32 = 'UINT32',
    SINT32 = 'SINT32',
    UINT64 = 'UINT64',
    SINT64 = 'SINT64',
    STRING = 'STRING',
    BOOLEAN = 'BOOLEAN',
    REAL32 = 'REAL32',
    REAL64 = 'REAL64'
}

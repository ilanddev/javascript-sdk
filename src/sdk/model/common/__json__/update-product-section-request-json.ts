/**
 * Update Product Section request JSON properties.
 * Contains a Map of fully-qualified product section property keys to new values.
 * Fully qualified keys are of the form [productSectionClass.]propertyKey[.productSectionInstance].
 */
export interface UpdateProductSectionRequestJson {
  params: { [ key: string]: string };
}

/**
 * Custom URL Encoder that matches the RFC3986.
 */
export class URLEncoder {

  /**
   * Encode URI components adhering to RFC 3986.
   * @param {string} str URI Component.
   * @param {boolean} encodeSpaceWithPlusSign If true, encode space char with a "+" instead of "%20".
   * @returns {string} encoded string.
   */
  static encodeURIComponentRFC5987(str: string, encodeSpaceWithPlusSign: boolean = false): string {
    const encoded = encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
    return encodeSpaceWithPlusSign ? encoded.replace(/%20/g, '+') : encoded;
  }
}

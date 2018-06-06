/**
 * Jpeg Image Class
 */
export class JpegImage {
  constructor(private data: Buffer) {}

  /**
   * Returns image as Uint8Array
   * @returns {Uint8Array} array Uint8Array
   */
  toUint8Array(): Uint8Array {
    return new Uint8Array(this.data);
  }

  /**
   * Returns image as Base64 string
   * @returns {string} string Base64 string
   */
  toDataUrl(): string {
    return 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, this.data));
  }
}

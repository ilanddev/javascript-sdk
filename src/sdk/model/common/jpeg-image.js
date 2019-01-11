"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Jpeg Image Class
 */
var JpegImage = (function () {
    function JpegImage(data) {
        this.data = data;
    }
    /**
     * Returns image as Uint8Array
     * @returns {Uint8Array} array Uint8Array
     */
    JpegImage.prototype.toUint8Array = function () {
        return new Uint8Array(this.data);
    };
    /**
     * Returns image as Base64 string
     * @returns {string} string Base64 string
     */
    JpegImage.prototype.toDataUrl = function () {
        return 'data:image/jpeg;base64,' + btoa(String.fromCharCode.apply(null, this.data));
    };
    return JpegImage;
}());
exports.JpegImage = JpegImage;

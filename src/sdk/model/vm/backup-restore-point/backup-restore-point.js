"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Backup Restore Point.
 */
var BackupRestorePoint = (function () {
    function BackupRestorePoint(_json) {
        this._json = _json;
    }
    Object.defineProperty(BackupRestorePoint.prototype, "name", {
        /**
         * Gets the name of the restore point.
         * @returns {string} the name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackupRestorePoint.prototype, "timestamp", {
        /**
         * Gets the timestamp of the backup restore point.
         * @returns {Date} date of the restore point
         */
        get: function () {
            return new Date(this._json.time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackupRestorePoint.prototype, "backupServerName", {
        /**
         * Gets the name of the backup server that the restore point is stored on.
         * @returns {string} the name of the backup server
         */
        get: function () {
            return this._json.backup_server_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BackupRestorePoint.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BackupRestorePoint.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BackupRestorePointJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BackupRestorePoint;
}());
exports.BackupRestorePoint = BackupRestorePoint;

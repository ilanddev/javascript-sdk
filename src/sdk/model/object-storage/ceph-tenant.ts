import { Iland } from '../../iland';
import { CephTenantJson } from './__json__/ceph-tenant-json';
import { S3BucketJson } from './__json__/s3-bucket-json';
import { S3Bucket } from './s3-bucket';
import { CephTenantKeyPair } from './ceph-tenant-key-pair';
import { CephTenantKeyPairJson } from './__json__/ceph-tenant-key-pair-json';
import { CephTenantKeyDeleteRequest } from './ceph-tenant-key-delete-request';
import { CephTenantKeyCreateRequest } from './ceph-tenant-key-create-request';
import { CephUserSessionJson } from './__json__/ceph-user-session-json';
import { CephUserSession } from './ceph-user-session';

/**
 * Object Storage Ceph Tenant resource
 */
export class CephTenant {

  constructor(private _json: CephTenantJson) {
  }

  static async getCephTenant(tenantId: string): Promise<CephTenant> {
    return Iland.getHttp().get(`/object-storage/${tenantId}`).then((res) => {
      const json = res.data as CephTenantJson;
      return new CephTenant(json);
    });
  }

  static async getCompanyCephTenants(companyId: string, region: string): Promise<Array<CephTenant>> {
    return Iland.getHttp().get(`/object-storage/${companyId}/${region}/tenants`).then((res) => {
      const json = res.data.data as Array<CephTenantJson>;
      return json.map(it => new CephTenant(it));
    });
  }

  get tenantId(): string {
    return this._json.tenant_id;
  }

  get companyId(): string {
    return this._json.company_id;
  }

  get region(): string {
    return this._json.region;
  }

  get isEnabled(): boolean {
    return this._json.enabled;
  }

  get quotaKib(): number {
    return this._json.quota_kib;
  }

  get usageKib(): number {
    return this._json.usage_kib;
  }

  get numOfObjects(): number {
    return this._json.num_objects;
  }

  get numOfBuckets(): number {
    return this._json.num_buckets;
  }

  get hasStatsAndBucketInfo(): boolean {
    return this._json.has_stats_and_bucket_info;
  }

  /**
   * JSON format.
   * @returns {string}
   */
  toString(): string {
    return JSON.stringify(this._json, undefined, 2);
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CephTenantJson} the API VM object
   */
  get json(): CephTenantJson {
    return Object.assign({}, this._json);
  }

  async getBucketInfo(): Promise<Array<S3Bucket>> {
    return Iland.getHttp().get(`/object-storage/${this.tenantId}/bucket-info`).then((res) => {
      const json = res.data.data as Array<S3BucketJson>;
      return json.map(it => new S3Bucket(it));
    });
  }

  async getTenantKeysForUser(username: string): Promise<Array<CephTenantKeyPair>> {
    return Iland.getHttp().get(`/object-storage/${this.tenantId}/keys/${username}`).then((res) => {
      const json = res.data.data as Array<CephTenantKeyPairJson>;
      return json.map(it => new CephTenantKeyPair(it));
    });
  }

  async deleteTenantKey(request: CephTenantKeyDeleteRequest): Promise<any> {
    return Iland.getHttp().delete(`/object-storage/${this.tenantId}/key`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        access_key: request.accessKey
      }
    });
  }

  async createTenantKey(request: CephTenantKeyCreateRequest): Promise<CephTenantKeyPair> {
    return Iland.getHttp().post(`/object-storage/${this.tenantId}/key`, request.json).then((res) => {
      const json = res.data as CephTenantKeyPairJson;
      return new CephTenantKeyPair(json);
    });
  }

  async createObjectStorageUserSession(): Promise<CephUserSession> {
    return Iland.getHttp().post(`/object-storage/${this.tenantId}/actions/create-user-session`, null).then((res) => {
      const json = res.data as CephUserSessionJson;
      return new CephUserSession(json);
    });
  }

  async syncTenant(): Promise<unknown> {
    return Iland.getHttp().post(`/object-storage/${this.tenantId}/sync`, null);
  }

  async renewUserSession(sessionToken: string): Promise<CephUserSession> {
    return Iland.getHttp().post(`/object-storage/${this.tenantId}/actions/renew-user-session/${sessionToken}`,
        null).then((res) => {
          const json = res.data as CephUserSessionJson;
          return new CephUserSession(json);
        });
  }

}

import { CompanyJson } from './json/company';
import { Entity } from './entity';
import { EntityType } from './json/entity-type';
import { Iland } from '../iland';

/**
 * Company.
 */
export class Company extends Entity {

  constructor(private _json: CompanyJson) {
    super(_json);
  }

  /**
   * Gets an Company by ID.
   * @param id Company ID
   * @returns {Promise<Company>} promise that resolves with the Company
   */
  static async getCompany(id: string): Promise<Company> {
    return Iland.getHttp().get(`/companies/${id}`).then(function(response) {
      let json = response.data as CompanyJson;
      return new Company(json);
    });
  }

  getEntityType(): EntityType {
    return 'COMPANY';
  }

  /**
   * Indicates whether the company has the iland cloud product.
   * @returns {boolean} value
   */
  hasIlandCloud(): boolean {
    return this._json.has_iaas;
  }

  /**
   * Indicates whether the company has the iland backup product.
   * @returns {boolean} value
   */
  hasIlandBackup(): boolean {
    return this._json.has_vcc;
  }

  /**
   * Gets the raw JSON object from the API.
   * @returns {CompanyJson} the JSON representation
   */
  getJson(): CompanyJson {
    return Object.assign({}, this._json);
  }

  /**
   * Refreshes the Company data by retrieving it from the API again.
   * @returns {Promise<Company>} promise that resolves with this object
   */
  async refresh(): Promise<Company> {
    let self = this;
    return Iland.getHttp().get(
      `/companies/${self.getUuid()}`).then(function(response) {
        self._json = response.data as CompanyJson;
        return self;
      });
  }

}

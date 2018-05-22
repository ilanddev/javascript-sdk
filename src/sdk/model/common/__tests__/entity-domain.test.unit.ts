import { IlandDirectGrantAuthProvider } from '../../../auth/direct-grant-auth-provider';
import { Iland } from '../../../iland';
import { EntityDomain } from '../entity-domain';
import { IamEntityType } from '../__json__/iam-entity-type';

jest.mock('../../../service/http/http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsForEntityDomain(entityDomain: EntityDomain,
                                      domainType: IamEntityType,
                                      parentType: IamEntityType | null) {
  expect(entityDomain.toString()).toBe(domainType);
  const parent: EntityDomain | null = entityDomain.parent;
  if (parent !== null) {
    expect(parent).toBeInstanceOf(EntityDomain);
    expect(parent.toString()).toBe(parentType);
  } else {
    expect(parent).toBeNull();
  }
}

test('Properly instantiate an EntityDomain class', () => {
  let entityDomain: EntityDomain = new EntityDomain('COMPANY');
  runAssertionsForEntityDomain(entityDomain, 'COMPANY', null);
  entityDomain = new EntityDomain('IAAS_PRODUCT');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_PRODUCT', 'COMPANY');
  entityDomain = new EntityDomain('VCC_BACKUP_PRODUCT');
  runAssertionsForEntityDomain(entityDomain, 'VCC_BACKUP_PRODUCT', 'COMPANY');
  entityDomain = new EntityDomain('IAAS_LOCATION');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_LOCATION', 'VCC_BACKUP_PRODUCT');
  entityDomain = new EntityDomain('IAAS_ORGANIZATION');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_ORGANIZATION', 'IAAS_LOCATION');
  entityDomain = new EntityDomain('IAAS_VPG');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VPG', 'IAAS_ORGANIZATION');
  entityDomain = new EntityDomain('IAAS_CATALOG');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_CATALOG', 'IAAS_ORGANIZATION');
  entityDomain = new EntityDomain('IAAS_MEDIA');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_MEDIA', 'IAAS_CATALOG');
  entityDomain = new EntityDomain('IAAS_VAPP_TEMPLATE');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VAPP_TEMPLATE', 'IAAS_CATALOG');
  entityDomain = new EntityDomain('IAAS_VDC');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VDC', 'IAAS_ORGANIZATION');
  entityDomain = new EntityDomain('IAAS_EDGE');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_EDGE', 'IAAS_VDC');
  entityDomain = new EntityDomain('IAAS_INTERNAL_NETWORK');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_INTERNAL_NETWORK', 'IAAS_VDC');
  entityDomain = new EntityDomain('IAAS_VAPP');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VAPP', 'IAAS_VDC');
  entityDomain = new EntityDomain('IAAS_VAPP_NETWORK');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VAPP_NETWORK', 'IAAS_VAPP');
  entityDomain = new EntityDomain('IAAS_VM');
  runAssertionsForEntityDomain(entityDomain, 'IAAS_VM', 'IAAS_VAPP');
  entityDomain = new EntityDomain('VCC_BACKUP_LOCATION');
  runAssertionsForEntityDomain(entityDomain, 'VCC_BACKUP_LOCATION', 'VCC_BACKUP_PRODUCT');
  entityDomain = new EntityDomain('VCC_BACKUP_TENANT');
  runAssertionsForEntityDomain(entityDomain, 'VCC_BACKUP_TENANT', 'VCC_BACKUP_LOCATION');
});

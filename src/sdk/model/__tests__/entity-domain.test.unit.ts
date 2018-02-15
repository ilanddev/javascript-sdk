import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { EntityDomain } from '../entity-domain';
import { EntityDomainType } from '../json';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

function runAssertionsForEntityDomain(entityDomain: EntityDomain,
                                      domainType: EntityDomainType,
                                      parentType: EntityDomainType | null) {
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
  entityDomain = new EntityDomain('ILAND_CLOUD_PRODUCT');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_PRODUCT', 'COMPANY');
  entityDomain = new EntityDomain('ILAND_BACKUP_PRODUCT');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_BACKUP_PRODUCT', 'COMPANY');
  entityDomain = new EntityDomain('ILAND_CLOUD_LOCATION');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_LOCATION', 'ILAND_BACKUP_PRODUCT');
  entityDomain = new EntityDomain('ILAND_CLOUD_ORGANIZATION');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_ORGANIZATION', 'ILAND_CLOUD_LOCATION');
  entityDomain = new EntityDomain('ILAND_CLOUD_VPG');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VPG', 'ILAND_CLOUD_ORGANIZATION');
  entityDomain = new EntityDomain('ILAND_CLOUD_CATALOG');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_CATALOG', 'ILAND_CLOUD_ORGANIZATION');
  entityDomain = new EntityDomain('ILAND_CLOUD_MEDIA');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_MEDIA', 'ILAND_CLOUD_CATALOG');
  entityDomain = new EntityDomain('ILAND_CLOUD_VAPP_TEMPLATE');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VAPP_TEMPLATE', 'ILAND_CLOUD_CATALOG');
  entityDomain = new EntityDomain('ILAND_CLOUD_VDC');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VDC', 'ILAND_CLOUD_ORGANIZATION');
  entityDomain = new EntityDomain('ILAND_CLOUD_EDGE');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_EDGE', 'ILAND_CLOUD_VDC');
  entityDomain = new EntityDomain('ILAND_CLOUD_INTERNAL_NETWORK');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_INTERNAL_NETWORK', 'ILAND_CLOUD_VDC');
  entityDomain = new EntityDomain('ILAND_CLOUD_VAPP');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VAPP', 'ILAND_CLOUD_VDC');
  entityDomain = new EntityDomain('ILAND_CLOUD_VAPP_NETWORK');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VAPP_NETWORK', 'ILAND_CLOUD_VAPP');
  entityDomain = new EntityDomain('ILAND_CLOUD_VM');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_CLOUD_VM', 'ILAND_CLOUD_VAPP');
  entityDomain = new EntityDomain('ILAND_BACKUP_LOCATION');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_BACKUP_LOCATION', 'ILAND_BACKUP_PRODUCT');
  entityDomain = new EntityDomain('ILAND_BACKUP_TENANT');
  runAssertionsForEntityDomain(entityDomain, 'ILAND_BACKUP_TENANT', 'ILAND_BACKUP_LOCATION');
});

import { NetworkValidationService } from '../network-validation-service';
import { IPv4Address, Cidr, Netmask, SubnetCidr } from '../network-validation-types';

test('Instantiation of IPv4Address object', () => {
  expect(new IPv4Address('1.2.3.4')).toBeInstanceOf(IPv4Address);
  expect(
    () => new IPv4Address('1.2.3.0', true)
  ).toThrow('Not valid IPv4 Address.');
  expect(
    () => new IPv4Address('1.2.3.?')
  ).toThrow('Not valid IPv4 Address.');
  expect(
    () => new IPv4Address('1.2.3')
  ).toThrow('Not valid IPv4 Address.');
});

test('Instantiation of Netmask object.', () => {
  expect(
    () => new Netmask('255.225.1.255')
  ).toThrow('Not valid IPv4 Netmask.');
  expect(
    () => new Netmask('255.255.0.1')
  ).toThrow('Not valid IPv4 Netmask.');
  expect(
    () => new Netmask('255.255.1.0')
  ).toThrow('Not valid IPv4 Netmask.');
  expect(
    new Netmask('255.255.255.0')
  ).toBeInstanceOf(Netmask);
});

test('Instantiation of SubnetCidr object', () => {
  expect(
    () => new SubnetCidr('1.2.3.4')).toThrow('Not valid CIDR.');
  expect(
    new SubnetCidr('192.168.0.0/14')
  ).toBeInstanceOf(SubnetCidr);
  expect(
    () => new SubnetCidr('192.168.10.1/24')
  ).toThrow('Not valid subnet CIDR.');
});

test('Check if getIPv4NetworkDescriptorFromCidr function fails to get network descriptor.', () => {
  expect(NetworkValidationService.getIPv4NetworkDescriptorFromCidr(new Cidr('192.30.250.2/18'))).toEqual(
    {
      gateway: '192.30.250.2',
      netmask: '255.255.192.0'
    });
  expect(() => {
    NetworkValidationService.getIPv4NetworkDescriptorFromCidr(
      new Cidr('192.30.250.2/0')
    );
  }).toThrow('Not valid CIDR.');
});

test('Check if getIPv4AddressRangeFromString function gets IPv4AddressRange from String.', () => {
  expect(NetworkValidationService.getIPv4AddressRangeFromString('1.2.3.4 - 5.6.7.8')).toEqual(
    {
      end: '5.6.7.8',
      start: '1.2.3.4'
    }
  );
  expect(NetworkValidationService.getIPv4AddressRangeFromString('1.2.3.4  5.6.7.8')).toBeNull();
  expect(() => {
    NetworkValidationService.getIPv4AddressRangeFromString('1.2.3.? - 5.6.7.8');
  }).toThrow('Not valid IPv4 Address.');
});

test('Get IPv4 Subnet CIDR.', () => {
  expect(
    NetworkValidationService.getSubnetCidr(
      new Netmask('255.252.0.0'),
      new IPv4Address('192.168.0.1')
    )
  ).toEqual('192.168.0.0/14');
  expect(() => {
    NetworkValidationService.getSubnetCidr(
      new Netmask('255.255.255.255'),
      new IPv4Address('0.0.0.0'));
  }).toThrow('Not valid IPv4 Netmask.');
});

test('Check if getSubnetIPv4AddressRange function fails to get subnet IPv4 Address range.', () => {
  expect(NetworkValidationService.getSubnetIPv4AddressRange(
    new Netmask('255.255.192.0'),
    new IPv4Address('192.168.0.1'))).toEqual(
    {
      end: '192.168.63.255',
      start: '192.168.0.0'
    }
  );
  expect(() => {
    NetworkValidationService.getSubnetIPv4AddressRange(
      new Netmask('255.255.192.?'),
      new IPv4Address('192.168.0.1'));
  }).toThrow('Not valid IPv4 Netmask.');
});

test('Check if get SubnetIPv4AddressRangeStr function gets Subnet IPv4 range as a string.', () => {
  expect(
    NetworkValidationService.getSubnetIPv4AddressRangeStr(
      new Netmask('255.255.0.0'),
      new IPv4Address('192.168.0.1'),
      false
    )).toEqual(
      '192.168.0.0 - 192.168.255.255');
  expect(NetworkValidationService.getSubnetIPv4AddressRangeStr(
    new Netmask('255.255.0.0'),
    new IPv4Address('192.168.0.1'),
    true
    )).toEqual(
      '192.168.0.1 - 192.169.0.0');
});

test('Check if in IPv4 subnet.', () => {
  expect(NetworkValidationService.isInSubnet(
    new Netmask('255.255.255.0'),
    new IPv4Address('192.0.2.130'),
    new IPv4Address('192.0.2.130')
  )).toBeTruthy();
  expect(NetworkValidationService.isInSubnet(
    new Netmask('255.255.255.0'),
    new IPv4Address('192.0.2.130'),
    new IPv4Address('192.1.2.130')
  )).toBeFalsy();
});

test('Test for isInIPv4AddressRange Function to see if address falls within range.', () => {
  expect(NetworkValidationService.isInIPv4AddressRange(
    new IPv4Address('10.0.0.1'),
    {
      start: '10.0.0.1',
      end: '10.0.0.10'
    }
  )).toBeTruthy();
  expect(NetworkValidationService.isInIPv4AddressRange(
    new IPv4Address('192.0.0.1'),
    {
      start: '10.0.0.1',
      end: '10.0.0.255'
    }
  )).toBeFalsy();
});

test('Check if any element in array of IPv4 Addresses is in range.', () => {
  expect(NetworkValidationService.isAnyIPv4AddressInIPv4AddressRange(
    [new IPv4Address('10.0.0.0')],
    {
      start: '10.0.0.10',
      end: '10.0.0.255'
    }
  )).toBeFalsy();
  expect(NetworkValidationService.isAnyIPv4AddressInIPv4AddressRange(
    [
      '10.0.0.0',
      '10.0.0.1',
      '10.0.0.2'
    ].map(
      testIp => {
        return new IPv4Address(testIp)
      }
    ),
    {
      start: '10.0.0.10',
      end: '10.0.0.255'
    }
  )).toBeFalsy();
  expect(NetworkValidationService.isAnyIPv4AddressInIPv4AddressRange(
    [
      '10.0.0.11',
      '10.0.0.12',
      '10.0.0.13'
    ].map(
      testIp => {
        return new IPv4Address(testIp)
      }
    ),
    {
      start: '10.0.0.10',
      end: '10.0.0.255'
    }
  )).toBeTruthy();
  expect(NetworkValidationService.isAnyIPv4AddressInIPv4AddressRange(
    [
      '10.0.0.11',
      '10.0.0.12',
      '10.0.0.13'
    ].map(
      testIp => {
        return new IPv4Address(testIp)
      }
    ),
    {
      start: '10.0.0.10',
      end: '10.0.0.255'
    }
  )).toBeTruthy();
});

test('Check if any element in array of IPv4 Addresses is in any of the ranges.', () => {
  expect(NetworkValidationService.isAnyIPv4AddressInAnyRange(
    [new IPv4Address('10.0.0.11'), new IPv4Address('10.0.0.1'), new IPv4Address('10.0.0.3')],
    [{
      start: '10.0.0.10',
      end: '10.0.0.255'
    }]
  )).toBeTruthy();
  expect(NetworkValidationService.isAnyIPv4AddressInAnyRange(
    [new IPv4Address('10.0.0.11'), new IPv4Address('10.0.0.12'), new IPv4Address('10.0.0.13')],
    [{
      start: '10.0.0.1',
      end: '10.0.0.10'
    }]
  )).toBeFalsy();
  expect(NetworkValidationService.isAnyIPv4AddressInAnyRange(
    [new IPv4Address('10.0.0.11'), new IPv4Address('10.0.0.12'), new IPv4Address('10.0.0.13')],
    [{
      start: '10.0.0.10',
      end: '10.0.0.255'
    },
    {
      start: '10.0.0.1',
      end: '10.0.0.10'
    }]
  )).toBeTruthy();
});

test('Check if IPv4 Address fits within any ranges in array.', () => {
  expect(NetworkValidationService.isIPv4AddressInAnyRange(
    new IPv4Address('10.0.0.11'),
    [{
      start: '10.0.0.1',
      end: '10.0.0.10'
    },
    {
      start: '10.0.0.11',
      end: '10.0.0.15'
    }]
  )).toBeTruthy();
  expect(NetworkValidationService.isIPv4AddressInAnyRange(
    new IPv4Address('10.0.0.10'),
    [{
      start: '10.0.0.1',
      end: '10.0.0.9'
    },
    {
      start: '10.0.0.11',
      end: '10.0.0.15'
    }]
  )).toBeFalsy();
});

test('Check if gets IPv4 Address as integer and vice-versa.', () => {
  expect(NetworkValidationService.getIntegerAsIPv4Address(-1062731775)).toEqual(
    '192.168.0.1'
  );
  expect(NetworkValidationService.getIPv4AsInteger(new IPv4Address('192.168.0.1'))).toEqual(
   -1062731775
  );
  const testIps = [
    '1.2.3.4',
    '2.3.5.6',
    '192.168.0.25',
    '10.10.10.12',
    '1.1.1.1',
    '1.0.0.0',
    '254.254.254.254'
  ].map(s => new IPv4Address(s));
  testIps.forEach(testIp => {
    expect(
      NetworkValidationService.getIntegerAsIPv4Address(
        NetworkValidationService.getIPv4AsInteger(testIp))).toEqual(testIp.address);
  });
});

test('Check if getNetmaskPrefixSize function gets Netmask prefix size.', () => {
  expect(NetworkValidationService.getNetmaskPrefixSize(new Netmask('255.255.255.254'))).toEqual(
    31
  );
  expect(NetworkValidationService.getNetmaskPrefixSize(new Netmask('255.255.255.0'))).toEqual(
    24
  );
  expect(NetworkValidationService.getNetmaskPrefixSize(new Netmask('255.255.0.0'))).toEqual(
    16
  );
  expect(NetworkValidationService.getNetmaskPrefixSize(new Netmask('255.0.0.0'))).toEqual(
    8
  );
  expect(NetworkValidationService.getNetmaskPrefixSize(new Netmask('0.0.0.0'))).toEqual(
    0
  );
});

test('Check if valid port.', () => {
  expect(NetworkValidationService.isValidIPv4AddressPort(2)).toBeTruthy();
  expect(NetworkValidationService.isValidIPv4AddressPort(0)).toBeFalsy();
  expect(NetworkValidationService.isValidIPv4AddressPort(65536)).toBeFalsy();
});

test('Get number of addresses in IPv4 range.', () => {
  expect(NetworkValidationService.getNumberOfIPv4AddressesInIPv4AddressRange(
    {
      start: '1.2.3.4',
      end: '5.6.7.8'
    }
  )).toEqual(67372037);
  expect(NetworkValidationService.getNumberOfIPv4AddressesInIPv4AddressRange(
    {
      start: '1.2.3.4',
      end: '1.2.3.4'
    }
  )).toEqual(1);
});

test('Check available IPs.', () => {
  expect(NetworkValidationService.getAvailableIPv4(
    [{
      start: '10.0.0.1',
      end: '10.0.0.10'
    }],
    [new IPv4Address('10.0.0.1'), new IPv4Address('10.0.0.2'), new IPv4Address('10.0.0.3')]
  )).toEqual('10.0.0.4');

  expect(NetworkValidationService.getAvailableIPv4(
    [{
      start: '10.0.0.1',
      end: '10.0.0.1'
    }],
    [new IPv4Address('10.0.0.2'), new IPv4Address('10.0.0.3')]
  )).toEqual('10.0.0.1');

  expect(NetworkValidationService.getAvailableIPv4(
    [{
      start: '10.0.0.1',
      end: '10.0.0.3'
    }],
    [new IPv4Address('10.0.0.1'), new IPv4Address('10.0.0.2'), new IPv4Address('10.0.0.3')]
  )).toBeNull();

  expect(NetworkValidationService.getAvailableIPv4(
    [{
      start: '10.0.0.1',
      end: '10.0.0.10'
    }],
    [new IPv4Address('10.0.0.2'), new IPv4Address('10.0.0.3')]
  )).toEqual('10.0.0.1');

  expect(NetworkValidationService.getAvailableIPv4(
    [{
      start: '10.0.0.1',
      end: '10.0.0.3'
    }],
    [new IPv4Address('10.0.0.11'), new IPv4Address('10.0.0.12'), new IPv4Address('10.0.0.13')]
  )).toEqual('10.0.0.1');
});

test('Check if IP list contains every entry in IPv4 Range.', () => {
  expect(NetworkValidationService.areAllIPv4AddressesFromRangeInList(
    [
      '10.0.0.1',
      '10.0.0.2',
      '10.0.0.3',
      '10.0.0.4',
      '10.0.0.5',
      '10.0.0.6',
      '10.0.0.7',
      '10.0.0.8',
      '10.0.0.9'
    ].map(
      testIp => {
        return new IPv4Address(testIp);
      }
    ),
    {
      start: '10.0.0.1',
      end: '10.0.0.10'
    }
  )).toBeFalsy();
  expect(NetworkValidationService.areAllIPv4AddressesFromRangeInList(
    [
      '10.0.0.1',
      '10.0.0.2',
      '10.0.0.3',
      '10.0.0.4',
      '10.0.0.5',
      '10.0.0.6',
      '10.0.0.7',
      '10.0.0.8',
      '10.0.0.9',
      '10.0.0.10'
    ].map(
      testIp => {
        return new IPv4Address(testIp);
      }
    ),
    {
      start: '10.0.0.1',
      end: '10.0.0.10'
    }
  )).toBeTruthy();
});

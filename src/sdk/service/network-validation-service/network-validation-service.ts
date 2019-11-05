import { Netmask, IPv4AddressRange, IPv4NetworkDescriptor, IPv4Address, Cidr, SubnetCidr }
  from './network-validation-types';

/**
 * Network Validation Service
 */
export abstract class NetworkValidationService {
  /**
   * Gets the integer representation of an IP address.
   * @param {string} ip the ip address.
   * @return {number} The integer representation.
   */
  public static getIPv4AsInteger(networkObject: IPv4Address | Cidr | Netmask): number | null {
    let components: Array<string>;
    if (networkObject instanceof Netmask) {
      components = networkObject.netmask.split('.');
    } else {
      components = networkObject.address.split('.');
    }
    let combined = 0;
    for (let i = components.length - 1; i >= 0; i--) {
      const index = 3 - i;
      const component = Number(components[index]);
      combined = combined | (component << (i * 8));
    }
    return combined;
  }

  /**
   * Gets prefix size of net mask.
   * @param {string} netmask netmask string.
   * @return {number} prefix size of netmask.
   */
  public static getNetmaskPrefixSize(netmask: Netmask): number {
    const maskInt = this.getIPv4AsInteger(netmask);
    const template = parseInt('80000000', 16);
    if (maskInt === 0) {
      return 0;
    }
    for (let i = 0; i <= 32; i++) {
      if ((template >> (i - 1)) === maskInt) {
        return i;
      }
    }
  }

  /**
   * Gets the netmask and gateway/ip from a CIDR formatted network string.
   * @param {string} cidr cidr string.
   * @return {IPv4NetworkDescriptor} of the form { gateway: '10.10.10.0', netmask:
   *         '255.255.255.0' }
   */
  public static getIPv4NetworkDescriptorFromCidr(cidr: Cidr): IPv4NetworkDescriptor | null {
    const mask = parseInt('80000000', 16) >> (cidr.hostIdentifier - 1);
    const netmask = new Netmask(this.getIntegerAsIPv4Address(mask));
    return {
      gateway: cidr.address,
      netmask: netmask.netmask
    };
  }

  /**
   * Gets an IP range object from a string of the format: a.b.c.d - e.f.g.h
   * @param {string} rangeStr: the range string to parse
   * @return {IPv4AddressRange} range object of the form stated in the description or null if invalid.
   */
  public static getIPv4AddressRangeFromString(rangeStr: string): IPv4AddressRange | null {
    const components = rangeStr.split('-');
    if (components.length === 2) {
      const start = new IPv4Address(components[0].trim()); // Validate and get address string.
      const end = new IPv4Address(components[1].trim());
      const startInt = this.getIPv4AsInteger(start);
      const startPos = startInt >= 0;
      const endInt = this.getIPv4AsInteger(end);
      const endPos = endInt >= 0;
      // test whether start IP is actually lower than the end IP.
      if ((startPos === endPos && endInt >= startInt) ||
        (startPos !== endPos && startInt < endInt)) {
        return {
          start: start.address,
          end: end.address
        };
      }
    }
    return null;
  }

  /**
   * Takes a netmask and any IP address on the network and converts it to a CIDR
   * string format.
   * @param {string} netmask: the netmsk string.
   * @param {string} address: the IP address string.
   * @return {string} a CIDR formatted network representation string.
   */
  public static getSubnetCidr(netmask: Netmask, ipAddress: IPv4Address): string | null {
    const prefixSize = this.getNetmaskPrefixSize(netmask);
    const components = ipAddress.address.split('.');
    const prefixMod = Math.floor((prefixSize - 1) / 8);
    let subnetIp = '';
    for (let i = 0; i < 4; i++) {
      const val = components[i];
      if (i < Math.ceil(prefixMod)) {
        subnetIp += components[i];
      } else {
        subnetIp += parseInt(val, 10) & (-1 << (8 * (i + 1)) - prefixSize);
      }
      if (i !== 3) {
        subnetIp += '.';
      }
    }
    return subnetIp + '/' + prefixSize;
  }

  /**
   * Gets the range of a subnet from the netmask and any IP address on the
   * network.
   * @param {string} netmask: the netmask string.
   * @param {string} ipAddress: the IP address string.
   * @return {IPv4AddressRange} an object of the form { start: "x.x.x.x", end: "x.x.x.x" },
   *         where the start field contains the IP address at the low end of the
   *         range and the end field contains the IP address at the high end of
   *         the range.
   */
  public static getSubnetIPv4AddressRange(netmask: Netmask, ipAddress: IPv4Address): IPv4AddressRange {
    const combined = this.getIPv4AsInteger(ipAddress);
    const combinedMask = this.getIPv4AsInteger(netmask);
    const low = combined & combinedMask;
    const high = low | (~combinedMask);
    return {
      start: this.getIntegerAsIPv4Address(low),
      end: this.getIntegerAsIPv4Address(high)
    };
  }

  /**
   * Gets a string representation of an IP address range without the .0 and .255 if applicable.
   * @param {string} netmask: the netmask string.
   * @param {string} ipAddress: the IP address string.
   * @return {string} a string representation of the IP address range. For
   *         example, "192.168.0.1 - 192.168.0.10".
   */
  public static getSubnetIPv4AddressRangeStr(netmask: Netmask, ipAddress: IPv4Address,
    withoutReserved: boolean): string {
    let range = this.getSubnetIPv4AddressRange(netmask, ipAddress);
    if (withoutReserved) {
      range = {
        start: this.getIntegerAsIPv4Address(this.getIPv4AsInteger(new IPv4Address(range.start)) + 1),
        end: this.getIntegerAsIPv4Address(this.getIPv4AsInteger(new IPv4Address(range.end)) + 1)
      };
      return range.start + ' - ' + range.end;
    }
    return range.start + ' - ' + range.end;
  }

  /**
   * Indicates whether an IP address belongs to a subnet.
   * @param {string} netmask the netmask of the subnet.
   * @param {string} netIpAddress any IP address on the subnet.
   * @param {string} testIpAddress the IP address which should be tested for
   *          whether it belongs to the subnet.
   * @return {boolean}
   */
  public static isInSubnet(netmask: Netmask, netIpAddress: IPv4Address, testIpAddress: IPv4Address): boolean {
    const netmaskInt = this.getIPv4AsInteger(netmask);
    const netIpInt = this.getIPv4AsInteger(netIpAddress);
    const testIpInt = this.getIPv4AsInteger(testIpAddress);
    return ((netmaskInt & netIpInt) === (netmaskInt & testIpInt));
  }

  /**
   * Indicates whether an IP address is in a range of IP addresses.
   * @param {string} ipAddress the IP address which should be tested for whether
   *          it is in the range.
   * @param {IPv4AddressRange} range an object of the form { start: "x.x.x.x", end:
   *          "x.x.x.x" }, representing the range of IP addresses.
   * @return {boolean}
   */
  public static isInIPv4AddressRange(ipAddress: IPv4Address, range: IPv4AddressRange): boolean {
    const testComponents = ipAddress.address.split('.');
    const lowComponents = range.start.split('.');
    const highComponents = range.end.split('.');
    for (let i = 0; i < 4; i++) {
      if (!this.inIPv4AddressRange(lowComponents[i], highComponents[i], testComponents[i])) {
        return false;
      }
    }
    return true;
  }

  /**
   * Takes a set of IP addresses and a set of IP ranges, and indicates whether
   * any of the IP addresses belong to any of the ranges.
   * @param {Array<string>} ips: array of IP strings
   * @param {Array<IPv4AddressRange>} ranges: array of range objects
   * @return {boolean} boolean value
   */
  public static isAnyIPv4AddressInAnyRange(ips: Array<IPv4Address>,
    ranges: Array<IPv4AddressRange>): boolean {
    for (let i = 0; i < ranges.length; i++) {
      if (this.isAnyIPv4AddressInIPv4AddressRange(ips, ranges[i])) {
        return true;
      }
    }
    return false;
  }

  /**
   * Indicates whether any IP in an array of IPs is within an IP range.
   * @param {Array<IPv4Address>} ips IP address strings.
   * @param {IPv4AddressRange} range IP range object.
   * @return {boolean} boolean value
   */
  public static isAnyIPv4AddressInIPv4AddressRange(ips: Array<IPv4Address>, range: IPv4AddressRange): boolean {
    return ips.filter((ip) => {
      return this.isInIPv4AddressRange(ip, range);
    }).length > 0;
  }

  /**
   * Converts integer to ip address representation.
   * @param {number} ipInt: Integer to be converted.
   * @return {string} IP Address string.
   */
  public static getIntegerAsIPv4Address(ipInt: number): string {
    const components = [];
    const template = 255;
    for (let i = 3; i >= 0; i--) {
      const modTemplate = (template << (i * 8));
      components.push((modTemplate & ipInt) >>> (i * 8));
    }
    return components.join('.');
  }

  /**
   * Parses string to int then checks if test number is between them.
   * @param {string} a first number for comparison.
   * @param {string} b second number for comparison.
   * @param {string} test number being compared.
   * @return {boolean}
   */
  public static inIPv4AddressRange(a: string, b: string, test: string): boolean {
    const aInt = parseInt(a, 10);
    const bInt = parseInt(b, 10);
    const testInt = parseInt(test, 10);
    const min = aInt < bInt ? aInt : bInt;
    const max = aInt > bInt ? aInt : bInt;
    return (testInt >= min && testInt <= max);
  }

  /**
   * Checks if integer representing port is valid.
   * @param {number} port port number being checked.
   * @return {boolean}
   */
  public static isValidIPv4AddressPort(port: number): boolean {
    return (port >= 1 && port <= 65535);
  }

  /**
   * Gets the number of IP addresses in a given range. Although unlikely to be
   * an issue, note that due to the fact that javascript numbers are represented
   * as signed, two's complement integers, for a network with more than 2^31
   * addresses this function will return a negative number (May not even be
   * technically possible). Returns -1 if the parameters are invalid.
   * @param {IPv4AddressRange} ipRange object representing IP range of the form { start:
   *          "x.x.x.x", end: "x.x.x.x" }
   * @return {integer} size of range.
   */
  public static getNumberOfIPv4AddressesInIPv4AddressRange(range: IPv4AddressRange): number | null {
    return this.getIPv4AsInteger(new IPv4Address(range.end)) - this.getIPv4AsInteger(new IPv4Address(range.start)) + 1;
  }

  /**
   * Returns an available IP address within one of an array of given ranges,
   * given an array of the IP addresses that are already allocated. Returns null
   * if no addresses are unallocated.
   * @param {Array<IPv4AddressRange>} ipRanges array of IP ranges to choose from.
   * @param {Array<string>} allocatedIpAddresses array of IP addresses which have
   *          already been allocated.
   * @return {string} an available IP address.
   */
  public static getAvailableIPv4(ipv4AddressRanges: Array<IPv4AddressRange>,
                                 allocatedIpAddresses: Array<IPv4Address>): string | null {
    const allocInts = allocatedIpAddresses.map(
      (ipAddress: IPv4Address) => {
        return this.getIPv4AsInteger(ipAddress);
      }
    );
    for (const ipIPv4AddressRange of ipv4AddressRanges) {
      const start = this.getIPv4AsInteger(new IPv4Address(ipIPv4AddressRange.start));
      const end = this.getIPv4AsInteger(new IPv4Address(ipIPv4AddressRange.end));
      for (let j = start; j !== end; j++) {
        if (!allocInts.includes(j)) {
          return this.getIntegerAsIPv4Address(j);
        }
      }
      if (!allocInts.includes(start) && start === end) {
        return this.getIntegerAsIPv4Address(start);
      }
    }
    return null;
  }

  /**
   * Returns if every address within range is in ip list.
   * @param {IPv4AddressRange} range range object.
   * @param {Array<string>} ipList array of IP addresses.
   * @return {boolean}
   */
  public static areAllIPv4AddressesFromRangeInList(ipList: Array<IPv4Address>, range: IPv4AddressRange): boolean {
    const start = this.getIPv4AsInteger(new IPv4Address(range.start));
    const end = this.getIPv4AsInteger(new IPv4Address(range.end));
    const ipListInts = ipList.map(
      (ipAddress: IPv4Address) => {
        return this.getIPv4AsInteger(ipAddress);
      }
    );
    for (let i = start; i <= end; i++) {
      if (!ipListInts.includes(i)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Indicates whether an IP address is within any range, among a given array of
   * IP ranges.
   * @param {string} ip IP address string.
   * @param {Array<IPv4AddressRange>} ranges an array of IP address range objects.
   * @return {boolean}
   */
  public static isIPv4AddressInAnyRange(ip: IPv4Address, ranges: Array<IPv4AddressRange>): boolean {
    return ranges.filter((range) => {
      return this.isInIPv4AddressRange(ip, range);
    }).length > 0;
  }

}

import { NetworkValidationService } from './network-validation-service';

/**
 * Object representing range of ip addresses.
 */
export interface IPv4AddressRange {
  start: string;
  end: string;
}

/**
 * Object representing parameters for a network.
 */
export interface IPv4NetworkDescriptor {
  gateway: string;
  netmask: string;
}

function isValid(address: string, strict?: boolean | undefined) {
  const components = address.split('.');
  if (components.length === 4) {
    if ((components.includes('0') || components.includes('255')) && strict) {
      return false;
    }
    for (const component of components) {
      const parsedComponent = Number(component);
      if (component === '' || isNaN(parsedComponent) || parsedComponent % 1 !== 0 ||
        parsedComponent < 0 || parsedComponent > 255) {
        return false;
      }
    }
    return true;
  }
  return false;
}

/**
 * Class representing IPv4Address and validation.
 */
export class IPv4Address {
  readonly address: string;
  readonly strict?: boolean;

  constructor(address: string, strict?: boolean) {
    if (isValid(address, strict)) {
      this.address = address;
    } else {
      throw new Error('Not valid IPv4 Address.');
    }
  }
}

/**
 * Class for representing CIDR with validations.
 */
export class Cidr {
  readonly hostIdentifier: number;
  readonly address: string;

  constructor(cidr: string) {
    if (Cidr.isValidCidr(cidr)) {
      const cidrComponents = cidr.split('/');
      this.address = cidrComponents[0];
      this.hostIdentifier = Number(cidrComponents[1]);
    } else {
      throw new Error('Not valid CIDR.');
    }
  }

  static isValidCidr(cidr: string) {
    const cidrComponents = cidr.split('/');
    if (cidrComponents.length !== 2) {
      return false;
    }
    const suffix = Number(cidrComponents[1]);
    if ((suffix > 31 || suffix < 1) || !isValid(cidrComponents[0])) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * Class representing IPv4 Netmask with validations.
 */
export class Netmask {
  readonly netmask: string;

  constructor(address: string) {
    if (Netmask.isValidNetmask(address) && isValid(address)) {
      this.netmask = address;
    } else {
      throw new Error('Not valid IPv4 Netmask.');
    }
  }

  static isValidNetmask(netmask: string): boolean {
    const components = netmask.split('.');
    let found = false;
    for (let i = 0; i < 4; i++) {
      const val = parseInt(components[i], 10);
      if ((val === 255 && i !== 3) || (found && val === 0)) {
        continue;
      } else if (found && val !== 0) {
        return false;
      } else if (val === 255 && i === 3) {
        return false;
      }
      let template = 128;
      for (let j = 0; j < 8; j++) {
        if ((template & val) === 0) {
          found = true;
        } else if (found) {
          return false;
        }
        template = template >>> 1;
      }
    }
    return true;
  }
}

/**
 * Class representing SubnetCidr with validations.
 */
export class SubnetCidr extends Cidr {
  readonly subnetCidr: string;

  constructor(cidr: string) {
    super(cidr);
    if (this.isValidSubnetCidr()) {
      this.subnetCidr = cidr;
    } else {
      throw new Error('Not valid subnet CIDR.');
    }
  }

  /**
   * Checks if string is valid subnet CIDR.
   * @param {string} cidr cidr string.
   * @return {boolean}
   */
  isValidSubnetCidr(): boolean {
    const gatewayInt = NetworkValidationService.getIPv4AsInteger(this);
    const revMaskInt = (2 ** (32 - Number(this.hostIdentifier))) - 1;
    return ((gatewayInt & revMaskInt) === 0);
  }
}

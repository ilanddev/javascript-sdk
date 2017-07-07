import { Vm, VmCpuUpdateJson, VmMemoryUpdateJson } from '../vm';
import { MockVm } from '../../__mocks__/responses/vm/vm';
import { IlandDirectGrantAuthProvider } from '../../auth/direct-grant-auth-provider';
import { Iland } from '../../iland';
import { MockVirtualDisk1, MockVirtualDisks } from '../../__mocks__/responses/vm/virtual-disks';
import { VirtualDiskJson } from '../json/virtual-disk';

jest.mock('../../http');

beforeAll(() => {
  Iland.init(new IlandDirectGrantAuthProvider({
    username: '',
    password: '',
    clientSecret: '',
    clientId: ''
  }));
});

test('Can get VM virtual disks', async() => {
  let vm = new Vm(MockVm);
  return vm.getVirtualDisks().then(function(disks) {
    expect(disks).toBeDefined();
    expect(disks.length).toBe(2);
    expect(disks[0].getSize()).toBe(MockVirtualDisks[0].size);
    expect(disks[0].getName()).toBe(MockVirtualDisks[0].name);
    expect(disks[0].getType()).toBe(MockVirtualDisks[0].type);
    expect(disks[1].getSize()).toBe(MockVirtualDisks[1].size);
    expect(disks[1].getName()).toBe(MockVirtualDisks[1].name);
    expect(disks[1].getType()).toBe(MockVirtualDisks[1].type);
  });
});

test('Properly submits request for updating VM virtual disks', async() => {
  const vm = new Vm(MockVm);
  const updatedDisks: Array<VirtualDiskJson> = [{
    name: 'Virtual Disk 3',
    type: 'IDE',
    size: 100
  }];
  return vm.updateVirtualDisks(updatedDisks).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disks`, updatedDisks);
    expect(task.getOperation()).toBe('update vm disks');
  });
});

test('Properly submits request for updating single VM virtual disk', async() => {
  const vm = new Vm(MockVm);
  const updatedDisk: VirtualDiskJson = Object.assign({}, MockVirtualDisk1);
  return vm.updateVirtualDisk(updatedDisk).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disk`, updatedDisk);
    expect(task.getOperation()).toBe('update vm disks');
  });
});

test('Properly submits request for creating new VM virtual disk', async() => {
  const vm = new Vm(MockVm);
  const newDisk: VirtualDiskJson = {
    size: 10000,
    name: 'new disk',
    type: 'BUS_LOGIC'
  };
  return vm.createVirtualDisk(newDisk).then(function(task) {
    expect(Iland.getHttp().post).lastCalledWith(`/vm/${vm.getUuid()}/virtual-disk`, newDisk);
    expect(task.getOperation()).toBe('add virtual disk');
  });
});

test('Properly submits request for deleting VM virtual disk', async() => {
  const vm = new Vm(MockVm);
  const diskName = 'disk to delete';
  return vm.deleteVirtualDisk(diskName).then(function(task) {
    expect(Iland.getHttp().delete).lastCalledWith(`/vm/${vm.getUuid()}/disks/${diskName}`);
    expect(task.getOperation()).toBe('delete virtual disk');
  });
});

test('Properly submits request for updating VM memory size', async() => {
  const vm = new Vm(MockVm);
  const newMemSize = 10000;
  const expectedSpec: VmMemoryUpdateJson = {
    memory_size: newMemSize.toString()
  };
  return vm.updateMemorySize(newMemSize).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/mem`, expectedSpec);
    expect(task.getOperation()).toBe('update memory size');
  });
});

test('Properly submits request for updating VM cpu number', async() => {
  const vm = new Vm(MockVm);
  const spec: VmCpuUpdateJson = {
    cpus_number: 8,
    cores_per_socket: 2
  };
  return vm.updateNumberOfCpus(spec).then(function(task) {
    expect(Iland.getHttp().put).lastCalledWith(`/vm/${vm.getUuid()}/cpu`, spec);
    expect(task.getOperation()).toBe('update cpu count');
  });
});

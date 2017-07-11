import { AxiosResponse } from 'axios';
import { BillJson } from '../../../model/json/bill';
import { BillingSummaryJson } from '../../../model/json/billing-summary';

export const MockVmBillJson: BillJson = {
  total: 195.02903,
  cpu: 4.52802,
  mem: 136.21491,
  bandwidth: 0.0,
  estimate: 195.02903,
  cpu_usage: 150.633,
  cpu_burst_usage: 150.633,
  cpu_res_usage: 0.0,
  mem_usage: 6356.27179,
  mem_res_usage: 0.0,
  mem_burst_usage: 6356.27179,
  bandwidth_usage: 0.0,
  cpu_burst: 4.52802,
  mem_burst: 136.21491,
  bandwidth_burst: 0.0,
  currency_code: 'USD',
  time: 1499774400000,
  test_drive: false,
  line_items: [{
    name: 'public ip address',
    price: 5,
    quantity: 5,
    product_id: '5'
  }],
  discount: 0.0,
  disk_usage: 129252.67183,
  disk: 54.2861,
  disk_burst_usage: 129252.67183,
  disk_burst: 54.2861,
  hdd_usage: 129252.67183,
  hdd_cost: 54.2861,
  hdd_burst_usage: 129252.67183,
  hdd_burst_cost: 54.2861,
  hdd_reserved_cost: 0.0,
  hdd_reserved_usage: 0.0,
  ssd_usage: 0.0,
  ssd_cost: 0.0,
  ssd_burst_usage: 0.0,
  ssd_burst_cost: 0.0,
  ssd_reserved_cost: 0.0,
  ssd_reserved_usage: 0.0,
  archive_usage: 0.0,
  archive_cost: 0.0,
  archive_burst_usage: 0.0,
  archive_burst_cost: 0.0,
  archive_reserved_cost: 0.0,
  archive_reserved_usage: 0.0,
  zerto_archive_usage: 0.0,
  zerto_archive_cost: 0.0,
  zerto_advanced_usage: 0.0,
  zerto_advanced_cost: 0.0,
  entity_uuid: 'dev-vcd01.iland.dev:urn:vcloud:vm:f83bb52c-271d-411f-9d0d-1307cb192cb2',
  entity_type: 'VM',
  entity_name: 'PAYG',
  bandwidth_reserved_usage: 0.0,
  bandwidth_reserved_cost: 0.0,
  bandwidth_burst_usage: 0.0
};

export const MockVmBillingSummaryJson: BillingSummaryJson = {
  current_hour: MockVmBillJson,
  current_month: MockVmBillJson,
  previous_hour: MockVmBillJson,
  previous_month: MockVmBillJson,
  test_drive: false
};

export const MockVmBillResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmBillJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

export const MockVmCurrentBillingSummaryResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockVmBillingSummaryJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

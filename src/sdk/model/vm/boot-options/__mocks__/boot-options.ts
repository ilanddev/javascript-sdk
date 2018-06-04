import { BootOptionsJson } from '../__json__';
import { AxiosResponse } from 'axios';

export const MockBootOptionsJson: BootOptionsJson = {
  boot_delay: 0,
  is_enter_bios: false
};

export const MockVmGetBootOptionsResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve) {
  resolve({
    data: MockBootOptionsJson,
    status: 200,
    statusText: '',
    headers: {},
    config: {}
  });
});

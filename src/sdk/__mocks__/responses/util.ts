import { AxiosResponse } from 'axios';

export class MockService {

  static async getMockNoContentResponse(): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>(function(resolve) {
      resolve({
        data: {},
        status: 204,
        statusText: '',
        headers: {},
        config: {}
      });
    });
  }

}

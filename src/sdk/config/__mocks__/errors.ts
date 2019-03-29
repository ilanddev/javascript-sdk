import { AxiosResponse } from 'axios';
import { ApiError, ApiErrorJson } from '../api-error';

export const MockNotFoundError: ApiErrorJson = {
  type: 'NotFoundError',
  message: 'The requested resource was not found.',
  detail_message: 'The detailed response error message'
};

export const MockUnauthorizedApiError: ApiErrorJson = {
  type: 'UnauthorizedError',
  message: 'The requested resource was not found.'
};

export const MockNotFoundResponse: Promise<AxiosResponse> = new Promise<AxiosResponse>(function(resolve, reject) {
  reject(new ApiError(MockNotFoundError));
});

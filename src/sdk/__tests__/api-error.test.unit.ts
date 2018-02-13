import { ApiError } from '../api-error';
import { MockNotFoundError, MockUnauthorizedApiError } from '../__mocks__/responses/errors';

test('Properly instanciate ApiError class', () => {
  let apiError = new ApiError(MockNotFoundError);
  expect(apiError.getMessage()).toEqual('The requested resource was not found.');
  expect(apiError.getDetailMessage()).toEqual('The detailed response error message');
  expect(apiError.getType()).toEqual('NotFoundError');
  expect(apiError.toString()).toBe(JSON.stringify(MockNotFoundError, undefined, 2));
  expect(apiError.getJson()).toMatchObject(Object.assign({}, MockNotFoundError));
  apiError = new ApiError(MockUnauthorizedApiError);
  expect(apiError.getDetailMessage()).toBeNull();
});

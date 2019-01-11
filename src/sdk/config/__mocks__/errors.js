"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockNotFoundError = {
    type: 'NotFoundError',
    message: 'The requested resource was not found.',
    detail_message: 'The detailed response error message'
};
exports.MockUnauthorizedApiError = {
    type: 'UnauthorizedError',
    message: 'The requested resource was not found.'
};
exports.MockNotFoundResponse = new Promise(function (resolve) {
    resolve({
        data: exports.MockNotFoundError,
        status: 200,
        statusText: '',
        headers: {},
        config: {}
    });
});

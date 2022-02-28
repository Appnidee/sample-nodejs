"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorWrapper = exports.successWrapper = void 0;
const successWrapper = (data) => ({
    message: 'success',
    status: 200,
    data,
});
exports.successWrapper = successWrapper;
const errorWrapper = (error) => ({
    message: 'Error',
    status: 500,
    error,
});
exports.errorWrapper = errorWrapper;

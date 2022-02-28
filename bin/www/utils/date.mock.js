"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetMockDateNow = exports.mockDateNow = void 0;
const realDateNow = Date.now.bind(global.Date);
const realGetTimezoneOffset = Date.prototype.getTimezoneOffset;
const mockDateNow = (timestamp) => {
    global.Date.now = jest.fn(() => timestamp);
    Date.prototype.getTimezoneOffset = jest.fn(() => 0);
};
exports.mockDateNow = mockDateNow;
const resetMockDateNow = () => {
    global.Date.now = realDateNow;
    Date.prototype.getTimezoneOffset = realGetTimezoneOffset;
};
exports.resetMockDateNow = resetMockDateNow;

const realDateNow = Date.now.bind(global.Date);
const realGetTimezoneOffset = Date.prototype.getTimezoneOffset;

const mockDateNow = (timestamp: number) => {
    global.Date.now = jest.fn(() => timestamp);
    Date.prototype.getTimezoneOffset = jest.fn(() => 0);
};

const resetMockDateNow = () => {
    global.Date.now = realDateNow;
    Date.prototype.getTimezoneOffset = realGetTimezoneOffset;
};

export { mockDateNow, resetMockDateNow };

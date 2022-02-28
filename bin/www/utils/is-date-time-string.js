"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTenDigitDateTimeString = exports.isSixDigitTimeString = void 0;
const lodash_1 = require("lodash");
const date_utils_1 = require("./date-utils");
const isSixDigitTimeString = (value) => {
    const timeArray = value.split(':');
    const formatTest = timeArray.filter((timeValue) => {
        const isNumber = !isNaN(Number(timeValue));
        const isTwoDigit = timeValue.length === 2;
        return isNumber && isTwoDigit;
    });
    if (formatTest.length !== timeArray.length) {
        return false;
    }
    if (timeArray.length !== 3) {
        return false;
    }
    const [hours, minutes, seconds] = timeArray.map(Number);
    if (!isHours(hours) || !isMinutes(minutes)) {
        return false;
    }
    if (!(0, lodash_1.inRange)(seconds, 0, 60)) {
        return false;
    }
    return true;
};
exports.isSixDigitTimeString = isSixDigitTimeString;
const isTenDigitDateTimeString = (dateTimeString) => {
    try {
        const { date, month, year, hours, minutes, seconds } = (0, date_utils_1.parseDateToObject)(dateTimeString);
        return ![
            isDate(date),
            isMonth(month),
            isYear(year),
            isHours(hours),
            isMinutes(minutes),
            isSeconds(seconds),
        ].includes(false);
    }
    catch (e) {
        return false;
    }
};
exports.isTenDigitDateTimeString = isTenDigitDateTimeString;
const isDate = (number) => (0, lodash_1.inRange)(number, 0, 32);
const isMonth = (number) => (0, lodash_1.inRange)(number, 0, 13);
const isYear = (number) => (0, lodash_1.inRange)(number, 0, 3000);
const isHours = (number) => (0, lodash_1.inRange)(number, 0, 24);
const isMinutes = (number) => (0, lodash_1.inRange)(number, 0, 60);
const isSeconds = (number) => (0, lodash_1.inRange)(number, 0, 60);

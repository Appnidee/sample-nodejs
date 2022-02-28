"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeFromDate = exports.readableDateFormat = exports.parseDateString = exports.parseDateToObject = exports.getNextDay = exports.getPreviousDay = exports.getPreviousDateday = exports.getPreviousISODay = exports.getTimeStringFromDate = exports.createDayInterval = exports.isRangeInbetweenRange = exports.mapDateToObject = void 0;
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const mapDateToObject = (date) => ({
    date: (0, date_fns_1.getDate)(date),
    year: (0, date_fns_1.getYear)(date),
    month: (0, date_fns_1.getMonth)(date),
});
exports.mapDateToObject = mapDateToObject;
const isRangeInbetweenRange = (rangeA, rangeB) => {
    const isStartSame = (0, date_fns_1.isSameMinute)(rangeA.start, rangeB.start);
    const isEndSame = (0, date_fns_1.isSameMinute)(rangeA.end, rangeB.end);
    const isStartAfter = (0, date_fns_1.isAfter)(rangeA.start, rangeB.start);
    const isEndBefore = (0, date_fns_1.isBefore)(rangeA.end, rangeB.end);
    return (isStartSame || isStartAfter) && (isEndSame || isEndBefore);
};
exports.isRangeInbetweenRange = isRangeInbetweenRange;
const createDayInterval = (date) => {
    const start = (0, date_fns_1.set)(date, {
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const end = (0, date_fns_1.set)(date, {
        hours: 23,
        minutes: 59,
        seconds: 59,
    });
    return {
        start,
        end,
    };
};
exports.createDayInterval = createDayInterval;
const getTimeStringFromDate = (date) => {
    const timeArray = [(0, date_fns_1.getHours)(date), (0, date_fns_1.getMinutes)(date), (0, date_fns_1.getSeconds)(date)];
    // return timeArray.map((timeValue: number): any => (timeValue === 0 ? '00' : timeValue)).join(':');
    const timestring = timeArray.map((timeValue) => (timeValue === 0 ? '00' : timeValue)).join(':');
    console.log(timestring.toString());
    return timestring.toString();
};
exports.getTimeStringFromDate = getTimeStringFromDate;
const getPreviousISODay = (date) => (0, date_fns_1.getISODay)((0, date_fns_1.subDays)(date, 1));
exports.getPreviousISODay = getPreviousISODay;
const getPreviousDateday = (date) => (0, date_fns_1.subDays)(date, 1);
exports.getPreviousDateday = getPreviousDateday;
const getPreviousDay = (dayOfWeek) => {
    //sunday is in US 1, but we will set sunday to 7 EU and monday to 1
    const previousDay = dayOfWeek - 1;
    return previousDay === 0 ? 7 : previousDay;
};
exports.getPreviousDay = getPreviousDay;
const getNextDay = (dayOfWeek) => {
    const nextDay = dayOfWeek + 1;
    return nextDay === 8 ? 1 : nextDay;
};
exports.getNextDay = getNextDay;
const parseDateToObject = (dateTimeString) => {
    const [dateString, timeString] = dateTimeString.split(' ');
    const [date, month, year, hours, minutes, seconds] = [...dateString.split('-'), ...timeString.split(':')].map(Number);
    return {
        date,
        month: month - 1,
        year,
        hours,
        minutes,
        seconds,
    };
};
exports.parseDateToObject = parseDateToObject;
const parseDateString = (dateTimeString) => (0, date_fns_1.set)(new Date(), (0, exports.parseDateToObject)(dateTimeString));
exports.parseDateString = parseDateString;
const readableDateFormat = (date) => (0, date_fns_1.format)(date, 'EEEE dd MMMM yyyy', { locale: locale_1.nl });
exports.readableDateFormat = readableDateFormat;
const timeFromDate = (date) => (0, date_fns_1.format)(date, 'HH:mm', { locale: locale_1.nl });
exports.timeFromDate = timeFromDate;

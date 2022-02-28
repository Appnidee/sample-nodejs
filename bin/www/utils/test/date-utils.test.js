"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_utils_1 = require("../date-utils");
const date_fns_1 = require("date-fns");
describe('Date and time utils', () => {
    describe('isRangeInbetweenRange()', () => {
        it('should return true with correctly fitting inside times/dates.', () => {
            const timeRangeA = {
                start: (0, date_fns_1.set)(new Date(), { hours: 4 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 7 }),
            };
            const timeRangeB = {
                start: (0, date_fns_1.set)(new Date(), { hours: 3 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 10 }),
            };
            expect((0, date_utils_1.isRangeInbetweenRange)(timeRangeA, timeRangeB)).toBeTruthy();
        });
        it('should return true as dates/times are both the same.', () => {
            const timeRangeA = {
                start: (0, date_fns_1.set)(new Date(), { hours: 4 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 7 }),
            };
            const timeRangeB = {
                start: (0, date_fns_1.set)(new Date(), { hours: 4 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 7 }),
            };
            expect((0, date_utils_1.isRangeInbetweenRange)(timeRangeA, timeRangeB)).toBeTruthy();
        });
        it('should return false as start time of A is before B.', () => {
            const timeRangeA = {
                start: (0, date_fns_1.set)(new Date(), { hours: 1 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 7 }),
            };
            const timeRangeB = {
                start: (0, date_fns_1.set)(new Date(), { hours: 3 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 10 }),
            };
            expect((0, date_utils_1.isRangeInbetweenRange)(timeRangeA, timeRangeB)).toBeFalsy();
        });
        it('should return false as end time of A is after B.', () => {
            const timeRangeA = {
                start: (0, date_fns_1.set)(new Date(), { hours: 4 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 11 }),
            };
            const timeRangeB = {
                start: (0, date_fns_1.set)(new Date(), { hours: 3 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 10 }),
            };
            expect((0, date_utils_1.isRangeInbetweenRange)(timeRangeA, timeRangeB)).toBeFalsy();
        });
        it('should return false as end and start time of A is before/after B.', () => {
            const timeRangeA = {
                start: (0, date_fns_1.set)(new Date(), { hours: 1 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 13 }),
            };
            const timeRangeB = {
                start: (0, date_fns_1.set)(new Date(), { hours: 3 }),
                end: (0, date_fns_1.set)(new Date(), { hours: 10 }),
            };
            expect((0, date_utils_1.isRangeInbetweenRange)(timeRangeA, timeRangeB)).toBeFalsy();
        });
    });
    describe('mapDateToObject()', () => {
        it('maps date to object correctly.', () => {
            const testDate = new Date('Mon Jul 06 2020 18:00:00');
            const { date, year, month } = (0, date_utils_1.mapDateToObject)(testDate);
            expect(date).toBe(6);
            expect(year).toBe(2020);
            expect(month).toBe(6);
        });
    });
});

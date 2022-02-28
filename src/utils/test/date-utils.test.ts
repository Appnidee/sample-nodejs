import { isRangeInbetweenRange, mapDateToObject } from '../date-utils';
import { set } from 'date-fns';

describe('Date and time utils', () => {
    describe('isRangeInbetweenRange()', () => {
        it('should return true with correctly fitting inside times/dates.', () => {
            const timeRangeA = {
                start: set(new Date(), { hours: 4 }),
                end: set(new Date(), { hours: 7 }),
            };

            const timeRangeB = {
                start: set(new Date(), { hours: 3 }),
                end: set(new Date(), { hours: 10 }),
            };

            expect(isRangeInbetweenRange(timeRangeA, timeRangeB)).toBeTruthy();
        });

        it('should return true as dates/times are both the same.', () => {
            const timeRangeA = {
                start: set(new Date(), { hours: 4 }),
                end: set(new Date(), { hours: 7 }),
            };

            const timeRangeB = {
                start: set(new Date(), { hours: 4 }),
                end: set(new Date(), { hours: 7 }),
            };

            expect(isRangeInbetweenRange(timeRangeA, timeRangeB)).toBeTruthy();
        });

        it('should return false as start time of A is before B.', () => {
            const timeRangeA = {
                start: set(new Date(), { hours: 1 }),
                end: set(new Date(), { hours: 7 }),
            };

            const timeRangeB = {
                start: set(new Date(), { hours: 3 }),
                end: set(new Date(), { hours: 10 }),
            };

            expect(isRangeInbetweenRange(timeRangeA, timeRangeB)).toBeFalsy();
        });

        it('should return false as end time of A is after B.', () => {
            const timeRangeA = {
                start: set(new Date(), { hours: 4 }),
                end: set(new Date(), { hours: 11 }),
            };

            const timeRangeB = {
                start: set(new Date(), { hours: 3 }),
                end: set(new Date(), { hours: 10 }),
            };

            expect(isRangeInbetweenRange(timeRangeA, timeRangeB)).toBeFalsy();
        });

        it('should return false as end and start time of A is before/after B.', () => {
            const timeRangeA = {
                start: set(new Date(), { hours: 1 }),
                end: set(new Date(), { hours: 13 }),
            };

            const timeRangeB = {
                start: set(new Date(), { hours: 3 }),
                end: set(new Date(), { hours: 10 }),
            };

            expect(isRangeInbetweenRange(timeRangeA, timeRangeB)).toBeFalsy();
        });
    });

    describe('mapDateToObject()', () => {
        it('maps date to object correctly.', () => {
            const testDate = new Date('Mon Jul 06 2020 18:00:00');
            const { date, year, month } = mapDateToObject(testDate);
            expect(date).toBe(6);
            expect(year).toBe(2020);
            expect(month).toBe(6);
        });
    });
});

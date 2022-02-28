import {
    getDate,
    getMonth,
    getYear,
    isBefore,
    isAfter,
    isSameMinute,
    set,
    getSeconds,
    getMinutes,
    getHours,
    getISODay,
    subDays,
    format,
} from 'date-fns';
import { nl } from 'date-fns/locale';
import { DateRange, DateYearMonth, DateTimeObject } from '../types/reservation.types';

export const mapDateToObject = (date: Date): DateYearMonth => ({
    date: getDate(date),
    year: getYear(date),
    month: getMonth(date),
});

export const isRangeInbetweenRange = (rangeA: DateRange, rangeB: DateRange): boolean => {
    const isStartSame = isSameMinute(rangeA.start, rangeB.start);
    const isEndSame = isSameMinute(rangeA.end, rangeB.end);
    const isStartAfter = isAfter(rangeA.start, rangeB.start);
    const isEndBefore = isBefore(rangeA.end, rangeB.end);
    return (isStartSame || isStartAfter) && (isEndSame || isEndBefore);
};

export const createDayInterval = (date: Date): DateRange => {
    const start = set(date, {
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const end = set(date, {
        hours: 23,
        minutes: 59,
        seconds: 59,
    });

    return {
        start,
        end,
    };
};

export const getTimeStringFromDate = (date: Date): string => {
    const timeArray = [getHours(date), getMinutes(date), getSeconds(date)];

   // return timeArray.map((timeValue: number): any => (timeValue === 0 ? '00' : timeValue)).join(':');
   const timestring = timeArray.map((timeValue: number): any => (timeValue === 0 ? '00' : timeValue)).join(':');
console.log(timestring.toString())
   return timestring.toString()
};

export const getPreviousISODay = (date: Date): number => getISODay(subDays(date, 1));

export const getPreviousDateday = (date: Date): Date => subDays(date, 1);


export const getPreviousDay = (dayOfWeek: number): number => {
    //sunday is in US 1, but we will set sunday to 7 EU and monday to 1
    const previousDay = dayOfWeek - 1;
    return previousDay === 0 ? 7 : previousDay;
};

export const getNextDay = (dayOfWeek: number): number => {
    const nextDay = dayOfWeek + 1;
    return nextDay === 8 ? 1 : nextDay;
};

export const parseDateToObject = (dateTimeString: string): DateTimeObject => {
    const [dateString, timeString] = dateTimeString.split(' ');

    const [date, month, year, hours, minutes, seconds] = [...dateString.split('-'), ...timeString.split(':')].map(
        Number
    );

    return {
        date,
        month: month - 1,
        year,
        hours,
        minutes,
        seconds,
    };
};

export const parseDateString = (dateTimeString: string): Date => set(new Date(), parseDateToObject(dateTimeString));

export const readableDateFormat = (date: Date) => format(date, 'EEEE dd MMMM yyyy', { locale: nl });

export const timeFromDate = (date: Date) => format(date, 'HH:mm', { locale: nl });

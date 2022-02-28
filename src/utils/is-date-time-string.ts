import { inRange } from 'lodash';
import { parseDateToObject } from './date-utils';

const isSixDigitTimeString = (value: string) => {
    const timeArray: string[] = value.split(':');

    const formatTest = timeArray.filter((timeValue: string) => {
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

    if (!inRange(seconds, 0, 60)) {
        return false;
    }

    return true;
};

const isTenDigitDateTimeString = (dateTimeString: string) => {
    try {
        const { date, month, year, hours, minutes, seconds } = parseDateToObject(dateTimeString);

        return ![
            isDate(date),
            isMonth(month),
            isYear(year),
            isHours(hours),
            isMinutes(minutes),
            isSeconds(seconds),
        ].includes(false);
    } catch (e) {
        return false;
    }
};

const isDate = (number: number) => inRange(number, 0, 32);
const isMonth = (number: number) => inRange(number, 0, 13);
const isYear = (number: number) => inRange(number, 0, 3000);
const isHours = (number: number) => inRange(number, 0, 24);
const isMinutes = (number: number) => inRange(number, 0, 60);
const isSeconds = (number: number) => inRange(number, 0, 60);

export { isSixDigitTimeString, isTenDigitDateTimeString };

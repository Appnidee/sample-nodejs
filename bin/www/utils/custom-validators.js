"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateInFuture = exports.OnlyIfOtherValueExists = exports.NotIfOtherValueExists = exports.IsDateBefore = exports.IsSixDigitTimeString = exports.Required = void 0;
const class_validator_1 = require("class-validator");
const date_fns_1 = require("date-fns");
const is_date_time_string_1 = require("./is-date-time-string");
function Required(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'Required',
            target: object.constructor,
            propertyName,
            options: {
                message: 'Field is marked as required.',
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    return typeof value !== 'undefined';
                },
            },
        });
    };
}
exports.Required = Required;
function IsSixDigitTimeString(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsSixDigitTimeString',
            target: object.constructor,
            propertyName,
            options: {
                message: 'Field is should be a valid time string: hh:mm:ss.',
                ...validationOptions,
            },
            validator: {
                validate(value) {
                    return value && (0, is_date_time_string_1.isSixDigitTimeString)(value);
                },
            },
        });
    };
}
exports.IsSixDigitTimeString = IsSixDigitTimeString;
function IsDateBefore(otherDateKey, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDateBefore',
            target: object.constructor,
            constraints: [otherDateKey],
            propertyName,
            options: {
                message: `${otherDateKey} should not be before ${propertyName}.`,
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const otherDate = args.object[relatedPropertyName];
                    try {
                        return (0, date_fns_1.isBefore)(new Date(value), new Date(otherDate));
                    }
                    catch (e) {
                        return false;
                    }
                },
            },
        });
    };
}
exports.IsDateBefore = IsDateBefore;
function NotIfOtherValueExists(otherKey, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'NotIfOtherValueExists',
            target: object.constructor,
            constraints: [otherKey],
            propertyName,
            options: {
                message: `${otherKey} should not have value at the same time as ${propertyName}`,
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const otherProperty = args.object[relatedPropertyName];
                    return typeof otherProperty === 'undefined';
                },
            },
        });
    };
}
exports.NotIfOtherValueExists = NotIfOtherValueExists;
function OnlyIfOtherValueExists(otherKey, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'OnlyIfOtherValueExists',
            target: object.constructor,
            constraints: [otherKey],
            propertyName,
            options: {
                message: `${otherKey} should have value at the same time as ${propertyName}`,
                ...validationOptions,
            },
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const otherProperty = args.object[relatedPropertyName];
                    return typeof otherProperty !== 'undefined';
                },
            },
        });
    };
}
exports.OnlyIfOtherValueExists = OnlyIfOtherValueExists;
function IsDateInFuture() {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'IsDatePast',
            target: object.constructor,
            propertyName,
            options: {
                message: `${propertyName} is in the past.`,
            },
            validator: {
                validate(value, args) {
                    const date = new Date(value);
                    const isDateInTheFuture = (0, date_fns_1.isFuture)(date);
                    return isDateInTheFuture;
                },
            },
        });
    };
}
exports.IsDateInFuture = IsDateInFuture;

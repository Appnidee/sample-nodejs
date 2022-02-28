import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import { isBefore, isFuture } from 'date-fns';
import { isSixDigitTimeString, isTenDigitDateTimeString } from './is-date-time-string';

export function Required(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'Required',
            target: object.constructor,
            propertyName,
            options: {
                message: 'Field is marked as required.',
                ...validationOptions,
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value !== 'undefined';
                },
            },
        });
    };
}

export function IsSixDigitTimeString(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsSixDigitTimeString',
            target: object.constructor,
            propertyName,
            options: {
                message: 'Field is should be a valid time string: hh:mm:ss.',
                ...validationOptions,
            },
            validator: {
                validate(value: any) {
                    return value && isSixDigitTimeString(value);
                },
            },
        });
    };
}

export function IsDateBefore(otherDateKey: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsDateBefore',
            target: object.constructor,
            constraints: [otherDateKey],
            propertyName,
            options: {
                message: `${otherDateKey} should not be before ${propertyName}.`,
                ...validationOptions,
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const otherDate = (args.object as any)[relatedPropertyName];
                    try {
                        return isBefore(new Date(value), new Date(otherDate));
                    } catch (e) {
                        return false;
                    }
                },
            },
        });
    };
}

export function NotIfOtherValueExists(otherKey: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'NotIfOtherValueExists',
            target: object.constructor,
            constraints: [otherKey],
            propertyName,
            options: {
                message: `${otherKey} should not have value at the same time as ${propertyName}`,
                ...validationOptions,
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const otherProperty = (args.object as any)[relatedPropertyName];
                    return typeof otherProperty === 'undefined';
                },
            },
        });
    };
}

export function OnlyIfOtherValueExists(otherKey: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'OnlyIfOtherValueExists',
            target: object.constructor,
            constraints: [otherKey],
            propertyName,
            options: {
                message: `${otherKey} should have value at the same time as ${propertyName}`,
                ...validationOptions,
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const otherProperty = (args.object as any)[relatedPropertyName];
                    return typeof otherProperty !== 'undefined';
                },
            },
        });
    };
}

export function IsDateInFuture() {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'IsDatePast',
            target: object.constructor,
            propertyName,
            options: {
                message: `${propertyName} is in the past.`,
            },
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const date = new Date(value);
                    const isDateInTheFuture = isFuture(date);
                    return isDateInTheFuture;
                },
            },
        });
    };
}

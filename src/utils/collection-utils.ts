import { memoize, isEmpty, isNull, isUndefined } from 'lodash';

interface Item {
    id: number;
    [key: string]: any;
}

export const getIds = memoize((list: any[]): number[] | string[] => list.map(({ id }) => id));

export const isList = (list: unknown[]) => !isEmpty(list);

export const selectById = (collection: Item[], id: number) => collection.find(item => item.id === id);

export const mergeCollections = (a: Item[], b: Item[]) => {
    return a.map((item: Item) => {
        const matchedItem = selectById(b, <number>item.id);
        if (matchedItem) {
            Object.assign(item, matchedItem);
        }
        return item;
    });
};

// @TODO: this probably should be deprecated, originally created to add performance features to arrays,
// but it never quite worked out so the PerformanceList is redundent and the native Array type should
// be used instead
export class PerformanceList {
    list: Item[];

    constructor(list: Item[]) {
        this.list = list;
    }

    siphon(predicate: Function): Item[] {
        return this.list.filter((...args) => predicate(...args));
    }

    get ids(): number[] {
        return this.list.map(({ id }) => id);
    }
}

export class Collection extends Array {
    get ids(): number[] {
        return this.map(({ id }) => id);
    }
}

export const filterOutEmpty = (item: unknown): boolean => !(isNull(item) || isUndefined(item));

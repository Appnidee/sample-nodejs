"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOutEmpty = exports.Collection = exports.PerformanceList = exports.mergeCollections = exports.selectById = exports.isList = exports.getIds = void 0;
const lodash_1 = require("lodash");
exports.getIds = (0, lodash_1.memoize)((list) => list.map(({ id }) => id));
const isList = (list) => !(0, lodash_1.isEmpty)(list);
exports.isList = isList;
const selectById = (collection, id) => collection.find(item => item.id === id);
exports.selectById = selectById;
const mergeCollections = (a, b) => {
    return a.map((item) => {
        const matchedItem = (0, exports.selectById)(b, item.id);
        if (matchedItem) {
            Object.assign(item, matchedItem);
        }
        return item;
    });
};
exports.mergeCollections = mergeCollections;
// @TODO: this probably should be deprecated, originally created to add performance features to arrays,
// but it never quite worked out so the PerformanceList is redundent and the native Array type should
// be used instead
class PerformanceList {
    constructor(list) {
        this.list = list;
    }
    siphon(predicate) {
        return this.list.filter((...args) => predicate(...args));
    }
    get ids() {
        return this.list.map(({ id }) => id);
    }
}
exports.PerformanceList = PerformanceList;
class Collection extends Array {
    get ids() {
        return this.map(({ id }) => id);
    }
}
exports.Collection = Collection;
const filterOutEmpty = (item) => !((0, lodash_1.isNull)(item) || (0, lodash_1.isUndefined)(item));
exports.filterOutEmpty = filterOutEmpty;

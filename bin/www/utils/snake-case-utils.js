"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const mapSnakeCase = (object) => (0, lodash_1.mapKeys)(object, (_value, keys) => (0, lodash_1.snakeCase)(keys));
exports.default = mapSnakeCase;

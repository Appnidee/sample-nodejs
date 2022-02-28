"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBaseEntity = void 0;
const typeorm_1 = require("typeorm");
class CustomBaseEntity extends typeorm_1.BaseEntity {
    constructor(params) {
        super();
        if (params) {
            Object.assign(this, params);
        }
    }
}
exports.CustomBaseEntity = CustomBaseEntity;
exports.default = CustomBaseEntity;

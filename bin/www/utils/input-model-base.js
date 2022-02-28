"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const validation_error_1 = require("../errors/validation-error");
class InputBaseModel {
    constructor(input) {
        Object.assign(this, input);
    }
    async validate() {
        const errors = await (0, class_validator_1.validate)(this);
        if (errors.length > 0) {
            throw new validation_error_1.ValidationError(errors);
        }
        return this;
    }
}
exports.default = InputBaseModel;

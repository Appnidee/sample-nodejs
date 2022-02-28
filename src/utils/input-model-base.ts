import { validate } from 'class-validator';
import { ValidationError } from '../errors/validation-error';

class InputBaseModel {
    constructor(input: Object) {
        Object.assign(this, input);
    }

    async validate() {
        const errors = await validate(this);

        if (errors.length > 0) {
            throw new ValidationError(errors);
        }

        return this;
    }
}

export default InputBaseModel;

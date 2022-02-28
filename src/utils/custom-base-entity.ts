import { BaseEntity } from 'typeorm';

export class CustomBaseEntity extends BaseEntity {
    constructor(params?: Object) {
        super();
        if (params) {
            Object.assign(this, params);
        }
    }
}

export default CustomBaseEntity;

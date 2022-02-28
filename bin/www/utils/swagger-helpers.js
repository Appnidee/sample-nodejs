"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformErrors = void 0;
const transformErrors = (errors) => {
    return errors
        .map(error => error())
        .map(error => {
        return {
            [error.status]: {
                description: error.message,
                content: {
                    'application/json': {
                        example: error,
                        schema: {
                            $ref: '#/components/schemas/HttpError',
                        },
                    },
                },
            },
        };
    })
        .reduce((a, b) => ({ ...a, ...b }));
};
exports.transformErrors = transformErrors;

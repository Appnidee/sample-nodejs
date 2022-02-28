const transformErrors = (errors: Function[]) => {
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

export { transformErrors };

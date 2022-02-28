export const successWrapper = (data: any) => ({
    message: 'success',
    status: 200,
    data,
});

export const errorWrapper = (error: any) => ({
    message: 'Error',
    status: 500,
    error,
});

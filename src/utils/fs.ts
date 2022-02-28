import fs from 'fs';

export const deleteFile = (path: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};

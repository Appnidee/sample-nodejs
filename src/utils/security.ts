import jwt from 'jsonwebtoken';
import config from 'config';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

const generateJwt = (id: number): string => jwt.sign({ id }, config.get('auth.clientSecret'));

const decodeJwt = (token: any) => jwt.verify(token, config.get('auth.clientSecret'));

const generateCode = async (): Promise<string> =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(6, function (err, buffer) {
            if (err) {
                reject(err);
            }
            const token = buffer.toString('hex').substring(0, 4);
            resolve(token.slice());
        });
    });

const hashPassword = async (password: string): Promise<string> =>
    new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return reject(err);
            }
            resolve(hash);
        });
    });

const comparePassword = async (planPassword: string, hashedPassword: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(planPassword, hashedPassword, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res === true);
        });
    });
};

export { generateJwt, decodeJwt, generateCode, hashPassword, comparePassword };

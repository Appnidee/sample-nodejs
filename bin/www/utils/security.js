"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = exports.generateCode = exports.decodeJwt = exports.generateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("config"));
const crypto_1 = __importDefault(require("crypto"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateJwt = (id) => jsonwebtoken_1.default.sign({ id }, config_1.default.get('auth.clientSecret'));
exports.generateJwt = generateJwt;
const decodeJwt = (token) => jsonwebtoken_1.default.verify(token, config_1.default.get('auth.clientSecret'));
exports.decodeJwt = decodeJwt;
const generateCode = async () => new Promise((resolve, reject) => {
    crypto_1.default.randomBytes(6, function (err, buffer) {
        if (err) {
            reject(err);
        }
        const token = buffer.toString('hex').substring(0, 4);
        resolve(token.slice());
    });
});
exports.generateCode = generateCode;
const hashPassword = async (password) => new Promise((resolve, reject) => {
    bcrypt_1.default.hash(password, 10, (err, hash) => {
        if (err) {
            return reject(err);
        }
        resolve(hash);
    });
});
exports.hashPassword = hashPassword;
const comparePassword = async (planPassword, hashedPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(planPassword, hashedPassword, (err, res) => {
            if (err) {
                return reject(err);
            }
            resolve(res === true);
        });
    });
};
exports.comparePassword = comparePassword;

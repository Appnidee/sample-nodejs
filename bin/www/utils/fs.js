"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = void 0;
const fs_1 = __importDefault(require("fs"));
const deleteFile = (path) => {
    return new Promise((resolve, reject) => {
        fs_1.default.unlink(path, err => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};
exports.deleteFile = deleteFile;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesUtility = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const lodash_1 = require("lodash");
const routesUtility = (routes) => {
    const router = express_1.default.Router();
    routes.forEach(({ method, action, requiresAuth, path }) => {
        let middleware = (0, lodash_1.isArray)(action) ? action : [action];
        if (requiresAuth) {
            middleware = [auth_1.strictAuthCheck, ...middleware];
        }
        else {
            middleware = [auth_1.laxAuthCheck, ...middleware];
        }
        // @ts-ignore
        router[method](path, middleware.map(middleWareAsyncWrapper));
    });
    return router;
};
exports.routesUtility = routesUtility;
const middleWareAsyncWrapper = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        }
        catch (e) {
            next(e);
        }
    };
};

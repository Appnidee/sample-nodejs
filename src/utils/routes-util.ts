import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { IRoute } from '../types/route.types';
import { strictAuthCheck, laxAuthCheck } from '../middleware/auth';
import { isArray } from 'lodash';

export const routesUtility = (routes: IRoute[]): express.Router => {
    const router = express.Router();

    routes.forEach(({ method, action, requiresAuth, path }) => {
        let middleware: Function[] = isArray(action) ? action : [action];

        if (requiresAuth) {
            middleware = [strictAuthCheck, ...middleware];
        } else {
            middleware = [laxAuthCheck, ...middleware];
        }

        // @ts-ignore
        router[method](path, middleware.map(middleWareAsyncWrapper));
    });

    return router;
};

const middleWareAsyncWrapper = (controller: Function) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await controller(req, res, next);
        } catch (e) {
            next(e);
        }
    };
};

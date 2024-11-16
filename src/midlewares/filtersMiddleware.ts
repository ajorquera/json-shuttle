import { INNER_QUERY_PARAM_PREFIX } from "@/env";
import { delayPromise } from "@/utils";
import { RequestHandler } from "express";
import { STATUS_CODES } from "http";

const getParam = (req: any, param: string) => {
    const prefix = INNER_QUERY_PARAM_PREFIX ?? 'shuttle-json-';
    const property = req.query[prefix + param] ?? req.headers[prefix + param];
    return property && property.toLowerCase();
}

const filterMiddleware: RequestHandler = async (req, res, next) => {
    const delay = getParam(req, 'delay');
    const status = getParam(req, 'status');
    const json = getParam(req, 'json');

    if (delay) {

        if (!delay) return next({ status: STATUS_CODES.BAD_REQUEST, message: 'Delay must be a number' });

        await delayPromise(delay * 1000);
    }

    if (status) {

        res.status(status);

        if (json) {
            let jsonObj = '';
            try {
                jsonObj = JSON.parse(json as string);
            } catch {
                return next({ status: STATUS_CODES.BAD_REQUEST, message: 'Invalid JSON' });
            }

            res.json(jsonObj);
        }

        res.end();

        return;
    }

    next();
}

export default filterMiddleware;
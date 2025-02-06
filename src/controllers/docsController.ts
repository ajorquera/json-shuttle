import { RequestHandler } from "express";
import rules from '../rules';
import path from "path";
import fs from 'fs';
import { delayPromise } from "../utils";

const readJson = (filePath: string): Promise<Buffer> => {
    const file = path.resolve(`./src/docs/${filePath}`);

    return new Promise((resolve, reject
    ) => {
        fs.readFile(path.resolve(file), (
            err, data
        ) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data.toString());
                resolve(json);
            }
        }
        );
    }
    );
}


const ConfigController: RequestHandler = async (req, res, next) => {
    for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        const regex = new RegExp(rule.expresion);

        if (!(regex.test(req.path) && rule.method === req.method)) continue;

        for (let j = 0; j < rule.responses.length; j++) {
            const response = rule.responses[j];
            if (response.delay) {
                await delayPromise(response.delay);
            }

            if (response.weight) {
                const shouldRespond = Math.random() < response.weight;

                if (shouldRespond) {
                    res.status(response.status ?? 200);

                    if (response.headers) {
                        res.set(response.headers);
                    }

                    if (response.file) {
                        const json = await readJson(response.file);
                        res.json(json);
                        return;
                    } else if (response.body) {
                        res.json(response.body);
                        return;
                    } else if (response.s3File) {
                        // Implement S3 file retrieval with streams
                    }
                }
            }
        }
    }

    next();
}


const DocsController: RequestHandler = (req, res, next) => {
    const fileName = req.path.split('/').pop();

    const method = req.method.toLowerCase();

    fs.readFile(path.resolve(`./src/docs/${method}/${fileName}.json`), (err, jsonBuffer) => {
        if (err) return next({ status: 404, message: `${fileName}.json not found`, originalError: err });
        const json = JSON.parse(jsonBuffer.toString());
        res.json(json);
    });
}

export default [ConfigController, DocsController];
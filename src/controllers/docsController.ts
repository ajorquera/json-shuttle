import { RequestHandler } from "express";
import fs from 'fs';
import path from "path";

const DocsController: RequestHandler = (req, res, next) => {
    const fileName = req.params.fileName;
    fs.readFile(path.resolve(`./src/docs/${fileName}.json`), (err, jsonBuffer) => {
        if (err) return next({ status: 404, message: `${fileName}.json not found`, originalError: err });
        const json = JSON.parse(jsonBuffer.toString());
        res.json(json);
    });
};

export default DocsController;
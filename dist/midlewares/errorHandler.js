"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { status } = require("http-status");
const errorHandler = (error, _req, res, _next) => {
    console.error(error);
    res.status(status.INTERNAL_SERVER_ERROR).end();
};
exports.default = errorHandler;

import { ErrorRequestHandler } from "express";
const { status } = require("http-status");

const errorHandler: ErrorRequestHandler = (
    error: Error,
    _req,
    res,
    _next
) => {
    console.error(error);
    res.status(status.INTERNAL_SERVER_ERROR).end();
};

export default errorHandler;
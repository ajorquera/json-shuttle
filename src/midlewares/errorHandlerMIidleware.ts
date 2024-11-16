import { ErrorRequestHandler } from "express";
const { status } = require("http-status");

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
    console.error(error);
    const statusToSend = error.status || status.INTERNAL_SERVER_ERROR;

    res.status(statusToSend).json({ status: statusToSend, message: error.message });
};

export default errorHandler;
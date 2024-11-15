import { RequestHandler } from "express";

const healthCheckController: RequestHandler = async (req, res) => {
    res.sendStatus(204);
};

export default healthCheckController; 
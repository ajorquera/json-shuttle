import e, { RequestHandler } from "express";

const HelloWordController: RequestHandler = (_req, res) => {
    res.send('Hello World!');
}

export default HelloWordController;
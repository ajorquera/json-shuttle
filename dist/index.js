"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const packageJS = require("../package.json");
require("dotenv/config");
const env_1 = require("./env");
const app_1 = __importDefault(require("./app"));
app_1.default.listen(env_1.PORT, () => {
    console.log(`${packageJS.name} is listening in port ${env_1.PORT}`);
});

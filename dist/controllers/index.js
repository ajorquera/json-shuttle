"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldController = exports.healthCheckController = void 0;
var healthCheckController_1 = require("./healthCheckController");
Object.defineProperty(exports, "healthCheckController", { enumerable: true, get: function () { return __importDefault(healthCheckController_1).default; } });
var helloWorldController_1 = require("./helloWorldController");
Object.defineProperty(exports, "helloWorldController", { enumerable: true, get: function () { return __importDefault(helloWorldController_1).default; } });

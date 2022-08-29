"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passengers_1 = __importDefault(require("./passengers/passengers"));
const router_1 = __importDefault(require("./AirRoutes/router"));
const airPlaneRouter_1 = __importDefault(require("./AirPlanes/airPlaneRouter"));
const router = require('express').Router();
router.use('/passengers', passengers_1.default);
router.use('/routes', router_1.default);
router.use('/planes', airPlaneRouter_1.default);
exports.default = router;

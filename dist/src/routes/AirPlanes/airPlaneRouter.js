"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const airPlanesControllers_1 = __importDefault(require("../../controllers/airPlanesControllers"));
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    airPlanesControllers_1.default.findAll(req, res);
}));
router.get('/list/findOneByID=:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    airPlanesControllers_1.default.findOneById(params.id, req, res);
}));
router.get('/list/findOneByPlaneId=:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    airPlanesControllers_1.default.findOneByPlaneId(params.id, req, res);
}));
router.post('/register/Route=:id', (req, res) => {
    const data = req.params;
    airPlanesControllers_1.default.create(data.id, req, res);
});
router.put('/edit/findOneByID=:id&newRouter=:router', (req, res) => {
    const data = req.params;
    console.log('data ', data.id);
    airPlanesControllers_1.default.updateOne('id', data.router, data.id, req, res);
});
router.put('/edit/findOneByplaneId=:planeId&newRouter=:router', (req, res) => {
    const data = req.params;
    console.log('data ', data);
    airPlanesControllers_1.default.updateOne('planeId', data.router, data.planeId, req, res);
});
router.delete('/delete/findOneByID=:id', (req, res) => {
    const data = req.params;
    airPlanesControllers_1.default.deleteById(data.id, req, res);
});
router.delete('/delete/findOneByPlaneId=:planeId', (req, res) => {
    const data = req.params;
    airPlanesControllers_1.default.deleteByPlaneId(data.planeId, req, res);
});
exports.default = router;

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
const routerController_1 = __importDefault(require("../../controllers/routerController"));
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    routerController_1.default.findAll(req, res);
}));
router.get('/list/findOneByID=:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    routerController_1.default.findOneById(params.id, req, res);
}));
router.get('/list/findOneByRouterLine=:line', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    routerController_1.default.findOneByRouterLine(params.line, req, res);
}));
router.post('/register', (req, res) => {
    const data = req.body;
    routerController_1.default.create(data, req, res);
});
router.put('/edit/findOneByID=:id', (req, res) => {
    const data = req.params;
    console.log(data);
    // Routes.updateOne(data.type, data.field, data.value, data.user, req, res)
});
router.delete('/delete/findOneByID=:id', (req, res) => {
    const data = req.params;
    routerController_1.default.deleteById(data, req, res);
});
router.delete('/delete/findOneByRouterLine=:line', (req, res) => {
    const data = req.params;
    routerController_1.default.deleteByRouterLine(data, req, res);
});
exports.default = router;

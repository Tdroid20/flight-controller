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
/*
=============================// GET //==============================
*/
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    routerController_1.default.getAll(req, res);
}));
router.get('/list/findOneByID=:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const params = req.params;
    console.log(params.id);
    routerController_1.default.findOneById(params.id, req, res);
}));
/*
=============================// POST //==============================
*/
router.post('/register', (req, res) => {
    const data = req.body;
    routerController_1.default.create(data, req, res);
});
/*
=============================// PUT //==============================
*/
router.put('/edit/findOneByID=:id', (req, res) => {
    const data = req.params;
    console.log(data);
    res.send(`Não consegui editar o passageiro ${data.id} pois ainda não tenho uma database criada. Tente novamente em breve.`);
});
/*
=============================// DELETE //==============================
*/
router.delete('/delete/findOneByID=:id', (req, res) => {
    const data = req.params;
    routerController_1.default.delete(data, req, res);
});
router.delete('/delete/all', (req, res) => {
    routerController_1.default.deleteAll(req, res);
});
exports.default = router;

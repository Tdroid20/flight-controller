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
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../models');
class Routes {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db.Routes.findAll();
                return res.status(200).json(result);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static findOneById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.Routes.findByPk(id);
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    static create(_newRegister, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { start, firstStop, secondStop, end } = Object.assign({}, _newRegister);
                if (typeof (_newRegister) != 'object') {
                    console.log(`O Tipo especificado não foi um Objeto`);
                    return res.status(501).send('O Tipo especificado não é um Objeto');
                }
                let getAllInDb = yield db.Routes.findAll();
                let NewRegister = {
                    id: getAllInDb.length + 1,
                    start,
                    firstStop,
                    secondStop,
                    end,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                yield db.Routes.create(NewRegister, req, res);
                res.status(200).json(Object.assign({}, _newRegister));
            }
            catch (error) {
                console.log(error);
                if (error.parent.code) {
                    console.log(error.parent.code);
                    if (error.parent.code === '23502')
                        return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`);
                    res.status(500).json(error);
                }
                else {
                    console.log(error);
                    res.status(500).json(error);
                }
            }
        });
    }
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                db.Routes.destroy({
                    truncate: true
                });
                res.status(200).send('Todas as Rotas foram removidas do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static delete(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(user.id);
                db.Routes.destroy({ where: { id: user.id } });
                res.status(200).send('Rota removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = Routes;

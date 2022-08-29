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
const uuid_1 = require("uuid");
const db = require('../models');
class airPlanes {
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db.airPlanes.findAll();
                return res.status(200).json(result);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    static findOneById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.airPlanes.findByPk(id);
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    static findOneByPlaneId(line, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.airPlanes.findOne({
                where: {
                    planeId: line
                }
            });
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    static create(_newRegister, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(Object.assign({}, _newRegister));
                let { router_id } = Object.assign({}, _newRegister);
                let validateRegister = [
                    router_id
                ];
                let tagRegister = [
                    'router_id',
                ];
                for (let i = 0; i < validateRegister.length; i++) {
                    if (validateRegister[i] === undefined) {
                        res.status(500).send(`o campo ${tagRegister[i]} não foi definido`);
                    }
                }
                let NewRegister = {
                    id: (0, uuid_1.v4)(),
                    router_id,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                yield db.airPlanes.create(NewRegister, req, res);
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
    static updateOne(findBy, value, user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let User;
            if (findBy === 'id') {
                User = yield db.airPlanes.findOne({
                    where: {
                        id: user
                    }
                });
            }
            else if (findBy === 'planeId') {
                User = yield db.airPlanes.findOne({
                    where: {
                        planeId: user
                    }
                });
            }
            if (value === undefined)
                return res.send(`Você não pode deixar o valor em branco`);
            User.router_id = value;
            User.save().then((x) => res.send(`Rota alterada com sucesso`));
        });
    }
    static deleteById(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let exist = yield db.airPlanes.findOne({
                    where: {
                        id: user
                    }
                });
                if (exist === null)
                    return res.status(404).send(`Não encontrado`);
                db.airPlanes.destroy({ where: { id: user } });
                res.status(200).send('Rota removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static deleteByPlaneId(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let exist = yield db.airPlanes.findOne({
                    where: {
                        planeId: user
                    }
                });
                if (exist === null)
                    return res.status(404).send(`Não encontrado`);
                db.airPlanes.destroy({ where: { planeId: user } });
                res.send('Rota removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = airPlanes;

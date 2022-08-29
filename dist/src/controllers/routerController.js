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
class Routes {
    static findAll(req, res) {
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
    static findOneByRouterLine(line, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.Routes.findOne({
                where: {
                    routerLine: line
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
                let { start, firstStop, secondStop, end, price } = Object.assign({}, _newRegister);
                let validateRegister = [
                    start,
                    firstStop,
                    secondStop,
                    end,
                    price
                ];
                let tagRegister = [
                    'start',
                    'firstStop',
                    'secondStop',
                    'end',
                    'price'
                ];
                for (let i = 0; i < validateRegister.length; i++) {
                    if (validateRegister[i] === undefined) {
                        res.status(500).send(`o campo ${tagRegister[i]} não foi definido`);
                    }
                }
                let NewRegister = {
                    id: (0, uuid_1.v4)(),
                    start,
                    firstStop,
                    secondStop,
                    end,
                    price,
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
    static updateOne(findBy, field, value, user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let User;
            if (findBy === 'id') {
                User = yield db.passengers.findByPk(user);
                console.log(User);
            }
            else if (findBy === 'routerLine') {
                User = yield db.passengers.findOne({
                    where: {
                        routerLine: user
                    }
                });
            }
            if (value === undefined)
                return res.send(`Você não pode deixar o valor em branco`);
            switch (field) {
                case 'start': {
                    User.start = value;
                    yield User.save().then((x) => res.send(`Local de partida alterado com sucesso`));
                    break;
                }
                case 'firstStop': {
                    User.firstStop = value;
                    yield User.save().then((x) => res.send(`Local primeira parada obrigatória alterada com sucesso`));
                    break;
                }
                case 'secondStop': {
                    User.firstStop = value;
                    yield User.save().then((x) => res.send(`Local segunda parada obrigatória alterada com sucesso`));
                    break;
                }
                case 'end': {
                    User.firstStop = value;
                    yield User.save().then((x) => res.send(`Local destino alterado com sucesso`));
                    break;
                }
            }
        });
    }
    static deleteById(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let exist = yield db.Routes.findOne({
                    where: {
                        id: user.id
                    }
                });
                if (exist === null)
                    return res.status(404).send(`Não encontrado`);
                db.Routes.destroy({ where: { id: user.id } });
                res.status(200).send('Rota removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static deleteByRouterLine(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let exist = yield db.Routes.findOne({
                    where: {
                        routerLine: user.line
                    }
                });
                if (exist === null)
                    return res.status(404).send(`Não encontrado`);
                db.Routes.destroy({ where: { routerLine: user.line } });
                res.send('Rota removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = Routes;

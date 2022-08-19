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
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield db.passengers.findAll();
                return res.status(200).json(result);
            }
            catch (err) {
                return res.status(500).json(err);
            }
        });
    }
    // READ
    static findOneById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.passengers.findByPk(id);
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    static findOneByEMAIL(email, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.passengers.findAll({
                where: {
                    email: email
                }
            });
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    static findOneByCPF(cpf, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield db.passengers.findAll({
                where: {
                    cpf: cpf
                }
            });
            if (!search) {
                return res.status(404).json('Não encontrado');
            }
            return res.status(200).json(search);
        });
    }
    //post
    static create(_newRegister, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, age, visa, nationality, goTo, isMarried } = Object.assign({}, _newRegister);
                let haveDiscount = isMarried === true ? true : false;
                let NewRegister = {
                    id: (0, uuid_1.v4)(),
                    name,
                    age,
                    visa,
                    nationality,
                    isMarried,
                    goTo,
                    haveDiscount,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                if (age <= 10)
                    return res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`);
                yield db.passengers.create(NewRegister, req, res);
                res.status(200).send(`O passageiro ${name} foi registrado`);
            }
            catch (error) {
                if (error.parent.code === '23502')
                    return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`);
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    // Delete
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                db.passengers.destroy({
                    truncate: true
                });
                res.status(200).send('Todos os passageiro removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    static delete(user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                db.passengers.destroy({ where: { id: user.id } });
                res.status(200).send('Passageiro removido do meu banco de dados');
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    // Update
    static updateOne(findBy, field, value, user, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let User;
            if (findBy === 'id') {
                User = yield db.passengers.findByPk(user);
            }
            else if (findBy === 'cpf') {
                User = yield db.passengers.findAll({
                    where: {
                        cpf: user
                    }
                });
            }
            else if (findBy === 'email') {
                User = yield db.passengers.findAll({
                    where: {
                        email: user
                    }
                });
            }
            if (field === 'age') {
                if (value <= 10)
                    return res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`);
                User.age = value;
                User.save().then((x) => res.send(x));
            }
            else if (field === 'name') {
                user.name = value;
                User.save().then((x) => res.send(x));
            }
            else if (field === 'isMarried') {
                if ([true, false].includes(value))
                    return res.send(`O valor não é um valor do tipo Boolean (verdadeiro ou falso)`);
                let convert = value === 'true' ? true : false;
                User.isMarried = convert;
                User.save().then((x) => res.send(x));
            }
            ;
        });
    }
}
exports.default = Routes;

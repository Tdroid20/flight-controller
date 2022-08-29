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
                let { cpf, email, name, age, visa, nationality, airPlane, isMarried } = Object.assign({}, _newRegister);
                let haveDiscount = isMarried === true ? true : false;
                let validateRegister = [
                    name,
                    age,
                    visa,
                    nationality,
                    airPlane,
                    isMarried,
                    cpf,
                    email,
                ];
                let tagRegister = [
                    'name',
                    'age',
                    'visa',
                    'nationality',
                    'airPlane',
                    'isMarried',
                    'cpf',
                    'email',
                ];
                //validação de campos nulos
                for (let i = 0; i < validateRegister.length; i++) {
                    if (validateRegister[i] === undefined) {
                        console.log(`o campo ${tagRegister[i]}  não foi definido`);
                        res.status(500).send(`o campo ${tagRegister[i]} não foi definido`);
                    }
                }
                const cpfAlreadyExists = yield db.passengers.findAll({
                    where: {
                        cpf: cpf
                    }
                });
                const airPlaneAlreadyExists = yield db.airPlanes.findOne({
                    where: {
                        id: airPlane
                    }
                });
                if (airPlaneAlreadyExists == null) {
                    return res.status(500).send('Esse Avião não existe no meu banco de dados');
                }
                const rateLimit = yield db.passengers.findAll({
                    where: {
                        airPlane: airPlane
                    }
                });
                console.log(`Esse avião possui ${rateLimit.length} passageiros`);
                if (rateLimit.length >= 8)
                    return res.send(`Esse avião está lotado.`);
                let NewRegister = {
                    id: (0, uuid_1.v4)(),
                    name,
                    age,
                    visa,
                    nationality,
                    isMarried,
                    airPlane,
                    cpf,
                    email,
                    haveDiscount,
                    createdAt: new Date(),
                    updatedAt: new Date()
                };
                if (age <= 10)
                    return res.send(`Só aceitamos passageiros maiores que 10 anos de idade`);
                if (nationality != 'Brasileiro')
                    return res.send('Sò aceitamos pessoas com nacionalidade brasileira');
                if (visa != 'Brasil')
                    return res.send('Sò aceitamos pessoas com visto para o Brasil');
                const IdAlreadyExists = yield db.passengers.findByPk(NewRegister.id);
                const emailAlreadyExists = yield db.passengers.findAll({
                    where: {
                        email: email
                    }
                });
                if (emailAlreadyExists[0] != undefined) {
                    console.log(`Esse E-mail já foi registrado por outro passageiro`);
                    return res.status(500).send('Esse E-mail já foi registrado por outro passageiro');
                }
                if (cpfAlreadyExists[0] != undefined) {
                    console.log(`Esse CPF já foi registrado por outro passageiro`);
                    return res.status(500).send('Esse CPF já foi registrado por outro passageiro');
                }
                else if (IdAlreadyExists != undefined) {
                    console.log(`O id ${NewRegister.id} já está vinculado a outra conta`);
                    return res.status(500).send(`O id ${NewRegister.id} já está vinculado a outra conta`);
                }
                if (age <= 10) {
                    res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`);
                }
                else {
                    yield db.passengers.create(NewRegister, req, res);
                    res.status(200).send(`O passageiro ${name} foi registrado`);
                }
            }
            catch (error) {
                if (error.parent) {
                    if (error.parent.code === '23502')
                        return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`);
                    console.log(error);
                }
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    // Delete
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
                console.log(User);
            }
            else if (findBy === 'cpf') {
                User = yield db.passengers.findOne({
                    where: {
                        cpf: user
                    }
                });
            }
            else if (findBy === 'email') {
                User = yield db.passengers.findOne({
                    where: {
                        email: user
                    }
                });
            }
            if (field === 'age') {
                if (value <= 10)
                    return res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`);
                User.age = value;
                yield User.save().then((x) => res.send(x));
            }
            else if (field === 'name') {
                user.name = value;
                yield User.save().then((x) => res.send(x));
            }
            else if (field === 'isMarried') {
                if ([true, false].includes(value))
                    return res.send(`O valor não é um valor do tipo Boolean (verdadeiro ou falso)`);
                let convert = value === 'true' ? true : false;
                User.isMarried = convert;
                yield User.save().then((x) => res.send(x));
            }
            ;
        });
    }
}
exports.default = Routes;

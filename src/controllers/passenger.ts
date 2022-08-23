import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid'
import { INewPassenger }  from '../interfaces/IPassangers';

interface InterableINewPasenger {
    [Symbol.iterator](): INewPassenger
}


const db = require('../models');

class Routes {
        static async findAll(req: Request, res: Response): Promise<any> {
                try {
                    const result = await db.passengers.findAll()
                    return res.status(200).json(result)
                } catch (err) {
                    return res.status(500).json(err)
                }
        }
        // READ
        static async findOneById(
            id: Number, 
            req: Request, 
            res: Response, 
            ): Promise<any> {
            const search = await db.passengers.findByPk(id);
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async findOneByEMAIL(
            email: String, 
            req: Request, 
            res: Response, 
            ): Promise<any> {
            const search = await db.passengers.findAll({
                where: {
                    email: email
                }
            });
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        static async findOneByCPF(
            cpf: String, 
            req: Request, 
            res: Response, 
            ): Promise<any> {
            const search = await db.passengers.findAll({
                where: {
                    cpf: cpf
                }
            });
            if(!search) {
                return res.status(404).json('Não encontrado')
            }
            return res.status(200).json(search)
        }

        //post
        static async create(
            _newRegister: INewPassenger, 
            req: Request, 
            res: Response
            ): Promise<any> {
                try {
                    
                    let { cpf, email, name, age, visa, nationality, startIn, endsIn, isMarried } =  Object.assign({}, _newRegister)
                    
                    let haveDiscount = isMarried === true ? true : false;

                    let validateRegister = [
                        name,
                        age,
                        visa,
                        nationality,
                        startIn,
                        endsIn,
                        isMarried,
                        cpf,
                        email,
                    ]


                    let tagRegister = [
                        'name',
                        'age',
                        'visa',
                        'nationality',
                        'startIn',
                        'endsIn',
                        'isMarried',
                        'cpf',
                        'email',
                    ]
                    
                    //validação de campos nulos
                    for(let i = 0; i < validateRegister.length; i++) {
                        
                        if(validateRegister[i] === undefined && tagRegister[i] != 'email') {
                            console.log(`o campo ${tagRegister[i]}  não foi definido`)
                            res.status(500).send(`o campo ${tagRegister[i]} não foi definido`)
                        }
                    }

                    const cpfAlreadyExists = await db.passengers.findAll({
                        where: {
                            cpf: cpf
                        }
                    });
                    
                    let NewRegister = {
                        id: uuid(),
                        name,
                        age,
                        visa,
                        nationality,
                        isMarried,
                        startIn,
                        endsIn,
                        cpf,
                        email,
                        haveDiscount,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }


                    if(age <= 10) return res.send(`Só aceitamos passageiros maiores que 10 anos de idade`)

                    if(nationality != 'Brasileiro') return res.send('Sò aceitamos pessoas com nacionalidade brasileira')

                    if(visa != 'Brasil') return res.send('Sò aceitamos pessoas com visto para o Brasil')

                    const IdAlreadyExists = await db.passengers.findByPk(NewRegister.id);

                    const emailAlreadyExists = await db.passengers.findAll({
                        where: {
                            email: email
                        }
                    });

                    if(emailAlreadyExists[0] != undefined) {
                        console.log(`Esse E-mail já foi registrado por outro passageiro`)
                        return res.status(500).send('Esse E-mail já foi registrado por outro passageiro')
                    }

                    if(cpfAlreadyExists[0] != undefined) {
                        console.log(`Esse CPF já foi registrado por outro passageiro`)
                        return res.status(500).send('Esse CPF já foi registrado por outro passageiro')
                    } else if(IdAlreadyExists != undefined) {
                        console.log(`O id ${NewRegister.id} já está vinculado a outra conta`)
                        return res.status(500).send(`O id ${NewRegister.id} já está vinculado a outra conta`)
                    }

                    if(age <= 10) {
                        res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`)
                    } else {
                        await db.passengers.create(NewRegister, req, res)
    
                        res.status(200).send(`O passageiro ${name} foi registrado`)
                    }

                } catch (error: any) {
                    if(error.parent){
                        if(error.parent.code === '23502') return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`)
                        console.log(error)
                    }
                    console.log(error)
                    res.status(500).json(error)
                }
            }
        // Delete
        static async delete(
            user: any, 
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                db.passengers.destroy({ where: { id: user.id } });
                res.status(200).send('Passageiro removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        }

        // Update
        static async updateOne(
            findBy: string | 'id' | 'cpf' | 'email',
            field: any,
            value: any,
            user: any,
            req: Request,
            res: Response
        ): Promise<any> {
            let User;

        if(findBy === 'id') {
            User = await db.passengers.findByPk(user);
            console.log(User)
        } else if(findBy === 'cpf') {
            User = await db.passengers.findOne({
                where: {
                    cpf: user
                }
            });
        } else if(findBy === 'email') {
            User = await db.passengers.findOne({
                where: {
                    email: user
                }
                
            });
        }

        if(field === 'age') {
            if(value <= 10) return res.status(500).send(`Só aceitamos pessoas com mais de 10 anos`)
            User.age = value
            await User.save().then((x:any) => res.send(x))
        } else if(field === 'name') { 
            user.name = value
            await User.save().then((x:any) => res.send(x))
        } else if(field === 'isMarried') { 
            if([true, false].includes(value)) return res.send(`O valor não é um valor do tipo Boolean (verdadeiro ou falso)`)
            let convert =  value === 'true' ? true : false;
            User.isMarried = convert
            await User.save().then((x:any) => res.send(x))
        };
    }
}

export default Routes;

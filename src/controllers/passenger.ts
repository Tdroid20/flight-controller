import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid'
import { INewPassenger }  from '../interfaces/IPassangers';

interface InterableINewPasenger {
    [Symbol.iterator](): INewPassenger
}


const db = require('../models');

class Routes {
        static async getAll(req: Request, res: Response): Promise<any> {
                try {
                    const result = await db.passengers.findAll()
                    return res.status(200).json(result)
                } catch (err) {
                    return res.status(500).json(err)
                }
        }

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

        static async create(
            _newRegister: INewPassenger, 
            req: Request, 
            res: Response
            ): Promise<any> {
                try {

                    let { name, age, visa, nationality, goTo, isMarried } =  Object.assign({}, _newRegister)
    
                    
                    let NewRegister = {
                        id: uuid(),
                        name,
                        age,
                        visa,
                        nationality,
                        isMarried,
                        goTo,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    }

                    await db.passengers.create(NewRegister, req, res)

                    res.status(200).send(`O passageiro ${name} foi registrado`)

                } catch (error: any) {
                    if(error.parent.code === '23502') return res.status(500).json(`Você o deixou campo ${error.parent.column} vazio.`)
                    console.log(error)
                    res.status(500).json(error)
                }
            }
        static async deleteAll(
            req: Request, 
            res: Response
            ): Promise<any> {
            try {
                db.passengers.destroy({
                    truncate: true
                  });
                  res.status(200).send('Todos os passageiro removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        } 
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

        static async updateOne(
            findBy: string | 'id' | 'cpf' | 'email',
            field: any,
            value: any,
            user: any,
            req: Request,
            res: Response
        ): Promise<any> {
                
            switch(findBy) {
                case 'id': {
                    console.log(user)
                    let User = await db.passengers.findByPk(user);

                    if(field === 'age') {
                        User.age = value
                        User.save().then((x:any) => res.send(x))
                        console.log(User.age)
                    } else if(field === 'name') { 
                        user.name = value
                        User.save().then((x:any) => res.send(x))
                    } else if(field === 'isMarried') { 
                        if([true, false].includes(value)) return res.send(`O valor não é um valor do tipo Boolean (verdadeiro ou falso)`)
                        let convert =  value === 'true' ? true : false;
                        User.isMarried = convert
                        User.save().then((x:any) => res.send(x))
                }
            }
        }
    }
}

export default Routes;

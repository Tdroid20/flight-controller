import { Request, Response } from 'express';
import NewPassenger  from '../interfaces/newPassenger';

interface InterableNewPassenger {
    [Symbol.iterator](): NewPassenger
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
            _newRegister: NewPassenger, 
            req: Request, 
            res: Response
            ): Promise<any> {
                try {

                    let { name, age, visa, nationality, goTo, isMarried } =  Object.assign({}, _newRegister)

                    let getAllInDb: Array<object> = await db.passengers.findAll()
    
                    
                    let NewRegister = {
                        id: getAllInDb.length + 1,
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
                    console.log(error.parent.code)
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
                console.log(user.id)
                db.passengers.destroy({ where: { id: user.id } });
                res.status(200).send('Passageiro removido do meu banco de dados')
            } catch (error) {
                res.status(500).json(error)
            }
        } 
    }

export default Routes;
